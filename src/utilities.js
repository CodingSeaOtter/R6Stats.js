const {
          API_URLS,
          PLATFORM_URLS,
          SEASONS,
          RANKS_V1,
          RANKS_V2,
          STATISTICS,
          STATISTICS_MODS,
          ADDITIONAL_STATISTICS
      } = require('./constants.js');

const FUNCTION_URLS = {
    AUTHENTICATE: () => API_URLS.AUTHENTICATION,
    USER_IDS    : (platform, usernames) => [API_URLS.VERSION_2, 'platformType=', platform, '&nameOnPlatform=', usernames.join(',')].join(''),
    USERNAMES   : (platform, user_ids) => [API_URLS.VERSION_2, 'userId=', user_ids.join(',')].join(''),
    LEVEL       : (platform, user_ids) => [getPlatformBasedURL(platform), 'r6playerprofile/playerprofile/progressions?profile_ids=', user_ids.join(',')].join(''),
    RANK        : (platform, user_ids, season, region) => [getPlatformBasedURL(platform), 'r6karma/players?board_id=pvp_ranked&season_id=', season, '&profile_ids=', user_ids.join(','), '&region_id=', region].join(''),
    STATISTICS  : (platform, user_ids, statistics) => [getPlatformBasedURL(platform), 'playerstats2/statistics?statistics=', statistics.join(','), '&populations=', user_ids.join(',')].join('')
};

const getPlatformBasedURL = platform => API_URLS.VERSION_1 + PLATFORM_URLS[platform];

const getFunctionURL = (func, ...args) => {
    return FUNCTION_URLS[func.toUpperCase()](...args);
};

const isRegionRelevant = (season) => season < SEASONS.STEEL_WAVE.id;

const getRanksForSeason = season => season < SEASONS.EMBER_RISE ? RANKS_V1 : RANKS_V2;

const getSeasonalRank = (season, rank_id) => Object.values(getRanksForSeason(season)).filter(({id}) => id === rank_id)[0];

const getSeason = season => Object.values(SEASONS).filter(({id}) => id === season)[0];

const flattenArray = arr => arr.reduce((previous, next) => previous.concat(Array.isArray(next) ? flattenArray(next) : next), []);

const filterObject = (obj, keys) => {
    return keys.reduce((previous, key) => {
        previous[key] = obj[key];

        return previous;
    }, {});
};

const getStatisticsSet = (statistic_set) => {
    if (statistic_set === '' || !statistic_set) {
        return STATISTICS;
    }

    return statistic_set.toUpperCase().split('=>').reduce((obj = {}, index) => obj[index], STATISTICS);
};

const getObjectPartFromKey = (object, key) => {
    return key.split('=>').reduce((obj = {}, index) => obj[index], object);
};

const createStatisticsMap = (key, set, parent = {}) => {
    return Object.entries(set).reduce((result, [id, statistic]) => {
        const next_key = (key ? [key, id].join('=>') : id).toUpperCase();
        if (typeof statistic !== 'string') {
            return createStatisticsMap(next_key, statistic, result);
        }
        if (!result[statistic]) {
            result[statistic] = [];
        }

        result[statistic].push(next_key);

        return result;
    }, parent);
};

const fillObject = (paths, object, value) => {
    const key = paths.shift().toLowerCase();

    if (paths.length === 0) {
        object[key] = value;

        return object;
    }

    object[key] = object[key] || {};

    return fillObject(paths, object[key], value);
};

const rebuildStatistics = (map, results, mods = STATISTICS_MODS) => {
    return Object.entries(results).reduce((previous, [result_key, result_value]) => {
        const paths = map[result_key];

        if (!paths) {
            return previous;
        }

        if (mods[result_key]) {
            result_value = applyMod(mods[result_key], result_value);
        }

        paths.forEach(path => {
            fillObject(path.split('=>'), previous, result_value);
        });

        return previous;
    }, {});
};

const applyAdditionalStatistics = statistics => {
    Object.entries(ADDITIONAL_STATISTICS).forEach(([statistics_key, [requirements, getStatistic]]) => {
        if (requirements.filter(requirement => getObjectPartFromKey(statistics, requirement.toLowerCase()) !== undefined).length === requirements.length) {
            fillObject(statistics_key.split('=>'), statistics, getStatistic(statistics));
        }
    });

    return statistics;
};

const applyMod = (mod, value) => {
    if (typeof mod === 'string') {
        return module.exports[mod](value);
    }

    return mod(value);
};

const convertSecondsToHours = seconds => Math.ceil(((seconds || 0) / 60) / 60);

const mergeDeep = (...objects) => {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            } else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            } else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
};

module.exports = {
    getPlatformBasedURL,
    getFunctionURL,
    isRegionRelevant,
    getRanksForSeason,
    getSeasonalRank,
    getSeason,
    flattenArray,
    filterObject,
    convertSecondsToHours,
    getStatisticsSet,
    getObjectPartFromKey,
    createStatisticsMap,
    fillObject,
    rebuildStatistics,
    applyMod,
    mergeDeep,
    applyAdditionalStatistics
};