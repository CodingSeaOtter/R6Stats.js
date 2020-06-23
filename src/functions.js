const {PLATFORMS, REGIONS, SEASONS, LATEST_SEASON, STATISTICS, API_URLS} = require('./constants.js');
const {
          getFunctionURL, isRegionRelevant, getRanksForSeason, getSeasonalRank,
          getSeason, filterObject, flattenArray, getStatisticsSet,
          createStatisticsMap, rebuildStatistics, mergeDeep, applyAdditionalStatistics

      }                                                                  = require('./utilities.js');
const {get: httpGet, post: httpPost}                                     = require('./http.js');

const getUserIDFromUsername = async ({token, usernames, platform = PLATFORMS.PC}) => {
    const url = getFunctionURL('USER_IDS', platform, usernames);

    return httpGet({url, token}).then(response => response.profiles.map(user => ({
        profile_id   : user.profileId,
        user_id      : user.userId,
        username     : user.nameOnPlatform,
        platform     : user.platformType,
        profile_image: getProfileImages({user_ids: [user.userId]})[0]
    })));
};

const getUsernameFromUserID = async ({token, user_ids, platform = PLATFORMS.PC}) => {
    const url = getFunctionURL('USERNAMES', platform, user_ids);

    return httpGet({url, token})
        .then(({profiles}) => profiles.reduce((result, profile) => {
            result[profile.userId] = result[profile.userId] || {};

            result[profile.userId][profile.platformType] = {
                profile_id       : profile.profileId,
                platform_id      : profile.idOnPlatform,
                platform_username: profile.nameOnPlatform
            };

            return result;
        }, {}));
};

const getTokenFromEmailAndPassword = async (email, password) => {
    const token = `Basic ` + Buffer.from(`${email}:${password}`, 'utf8').toString('base64');
    const url   = getFunctionURL('AUTHENTICATE');
    const body  = {rememberMe: true};

    return httpPost({url, token, body});
};

const getRank = ({token, user_ids, platform = PLATFORMS.PC, regions = REGIONS.AMERICAS, seasons = LATEST_SEASON.id}) => {
    if (seasons === -1) {
        seasons = Object.entries(SEASONS).map(([ame, {id: season_id}]) => season_id);
    }

    if (!Array.isArray(seasons)) {
        seasons = [seasons];
    }

    if (regions === '-1') {
        regions = Object.values(REGIONS);
    }

    if (!Array.isArray(regions)) {
        regions = Object.values(REGIONS);
    }

    return Promise.all(seasons.map(season => {
            const seasonal_regions = isRegionRelevant(season) ? regions : [REGIONS.AMERICAS];

            return Promise.all(seasonal_regions.map(region => {
                    return httpGet({
                        url: getFunctionURL('RANK', platform, user_ids, season, region),
                        token
                    });
                })
            );
        })
    )
        .then(response => flattenArray(response))
        .then(response => response.reduce((result, {players}) => {
            Object.entries(players).map(([user_id, {season, region, ...data}]) => {
                //No need to bloat the result with data for seasons with no ranked matches.
                if (data.rank === (getRanksForSeason(season).UNRANKED.id && (data.losses + data.wins + data.abandons) === 0)) {
                    return;
                }

                const seasonal_data             = filterObject(getSeason(season), ["colour", "banner", "name"]);
                const ranked_data               = filterObject(data, [
                    "kills",
                    "deaths",
                    "wins",
                    "losses",
                    "abandons",
                    "update_time",
                    "skill_mean",
                    "skill_stdev",
                    "top_rank_position"
                ]);
                result[user_id]                 = result[user_id] || {seasons: {}};
                result[user_id].seasons[season] = result[user_id].seasons[season] || Object.assign(seasonal_data, isRegionRelevant(season) ? {
                    regions: {}
                } : {});
                const rank_information          = Object.assign({
                    current         : {
                        rank: filterObject(getSeasonalRank(season, data.rank), ['name', 'badge']),
                        mmr : data.mmr
                    },
                    highest         : {
                        rank: filterObject(getSeasonalRank(season, data.max_rank), ['name', 'badge']),
                        mmr : data.max_mmr
                    },
                    matches         : data.wins + data.losses,
                    kill_death_ratio: (data.kills / data.deaths).toFixed(1),
                    win_probability : ((data.wins / (data.wins + data.losses)) * 100).toFixed(1),

                    lastest_match: {
                        mmr_change        : data.last_match_mmr_change,
                        win               : data.last_match_result === 1,
                        skill_stdev_change: data.last_match_skill_stdev_change
                    },
                    previous_rank: getSeasonalRank(season, data.rank - 1) ? {
                        rank   : filterObject(getSeasonalRank(season, data.rank - 1), ['name', 'badge']),
                        mmr    : data.mmr - data.previous_rank_mmr,
                        matches: Math.ceil((data.mmr - data.previous_rank_mmr) / Math.abs(data.last_match_mmr_change))
                    } : null,
                    next_rank    : getSeasonalRank(season, data.rank + 1) ? {
                        rank   : filterObject(getSeasonalRank(season, data.rank + 1), ['name', 'badge']),
                        mmr    : data.next_rank_mmr - data.mmr,
                        matches: Math.ceil((data.next_rank_mmr - data.mmr) / Math.abs(data.last_match_mmr_change))
                    } : null
                }, ranked_data);

                isRegionRelevant(season) ? (result[user_id].seasons[season].regions[region] = rank_information) : (result[user_id].seasons[season] = rank_information);
            });
            return result;
        }, {}))
        .then(result => user_ids.length > 1 ? result : Object.values(result)[0]);
};

const getLevel = ({token, user_ids, platform = PLATFORMS.PC}) => {
    return httpGet({url: getFunctionURL('LEVEL', platform, user_ids), token})
        .then(({player_profiles}) => player_profiles.reduce((previous, next_user) => {
            previous[next_user.profile_id] = {
                clearance_level  : next_user.level,
                experience_points: next_user.xp,
                alpha_pack_chance: next_user.lootbox_probability / 100
            };

            return previous;
        }, {}))
        .then(result => user_ids.length > 1 ? result : Object.values(result)[0]);
};

const getStatistics = ({token, user_ids, platform = PLATFORMS.PC, statistics_key}) => {
    const statistics_set    = getStatisticsSet(statistics_key);
    const statistics_map    = createStatisticsMap(statistics_key, statistics_set);
    const chunk_limit       = 7500 - user_ids.join(',').length;
    const statistics_chunks = Object.keys(statistics_map).reduce((previous, current) => {
        const index   = previous.length ? previous.length - 1 : 0;
        const content = previous[index] ? `${previous[index]},${current}` : current;

        return content.length <= chunk_limit ? Object.assign(previous, {[index]: content}) : [...previous, current];
    }, []);

    return Promise.all(statistics_chunks.map(chunk => httpGet({
            url: getFunctionURL('STATISTICS', platform, user_ids, chunk.split(',')),
            token
        }))
    )
        .then(responses => responses.reduce((previous, {results}) => {
            previous = mergeDeep(previous, results);

            return previous;
        }, {}))
        .then(player_statistics => Object.entries(player_statistics).reduce((actual, [user_id, stats]) => {
            actual[user_id] = mergeDeep(Object.keys(statistics_map).reduce((map_actual, map_key) => {
                map_actual[map_key] = 0;


                return map_actual;
            }, {}), stats);

            return actual;
        }, player_statistics))
        .then(player_statistics => Object.entries(player_statistics).reduce((previous, [user_id, stats]) => {
            previous[user_id] = rebuildStatistics(statistics_map, stats);

            return previous;
        }, {}))
        .then(player_statistics => Object.entries(player_statistics).reduce((previous, [user_id, stats]) => {
            previous[user_id] = applyAdditionalStatistics(stats);

            return previous;
        }, {}));
};

const getProfileImages = ({user_ids, size = 256}) => {
    return user_ids.map(user_id => [API_URLS.PROFILE_PICTURE, user_id, `default_${size}_${size}.png`].join('/'));
};

module.exports = {
    getUserIDFromUsername,
    getUsernameFromUserID,
    getTokenFromEmailAndPassword,
    getRank,
    getLevel,
    getStatistics,
    getProfileImages
};