const {
          getUserIDFromUsername,
          getUsernameFromUserID,
          getTokenFromEmailAndPassword,
          getRank,
          getLevel,
          getStatistics
      } = require('./functions.js');
const {
          PLATFORMS,
          LATEST_SEASON,
          REGIONS
      } = require('./constants.js');

class R6StatsJS {
    constructor(credentials = {}, options = {}) {
        this.credentials = credentials;
        this.options     = options;
    }

    async login() {
        if (this.credentials.ticket) {
            return;
        }

        if (!this.credentials.email && !this.credentials.password) {
            throw new Error('MissingCredentials');
        }

        const {email, password}       = this.credentials;
        const authentication_response = await getTokenFromEmailAndPassword(email, password);

        this.credentials = {
            ticket    : authentication_response.ticket,
            profile   : authentication_response,
            expiration: new Date(authentication_response.expiration)
        };
    }

    async getUsernamesFromUserIDs({platform = PLATFORMS.PC, user_ids = []}) {
        if (!this.getAuthToken()) {
            await this.login();
        }

        if (user_ids.length === 1 && user_ids[0].toLowerCase() === this.getUserID() && platform === this.getPlatform()) {
            return this.getUsername();
        }

        return getUsernameFromUserID({token: this.getAuthToken(), platform, user_ids});
    }

    async getUserIDSFromUsernames({platform = PLATFORMS.PC, usernames = []}) {
        if (!this.getAuthToken()) {
            await this.login();
        }

        if (usernames.length === 1 && usernames[0].toLowerCase() === this.getUsername() && platform === this.getPlatform()) {
            return this.getUserID();
        }

        return getUserIDFromUsername({token: this.getAuthToken(), platform, usernames});
    }

    async getRank({platform = PLATFORMS.PC, user_ids = [], seasons = LATEST_SEASON.id, regions = REGIONS.AMERICAS}) {
        if (!this.getAuthToken()) {
            await this.login();
        }

        return getRank({token: this.getAuthToken(), platform, user_ids, seasons, regions});
    }

    async getLevel({platform = PLATFORMS.PC, user_ids}) {
        if (!this.getAuthToken()) {
            await this.login();
        }

        return getLevel({token: this.getAuthToken(), platform, user_ids});
    }

    async getPlaytime({platform = PLATFORMS.PC, user_ids}) {
        if (!this.getAuthToken()) {
            await this.login();
        }

        return this.getStatistics({platform, user_ids, statistics_key: 'PLAY_TIME'});
    }

    async getStatistics({platform = PLATFORMS.PC, user_ids, statistics_key}) {
        if (!this.getAuthToken()) {
            await this.login();
        }

        return getStatistics({token: this.getAuthToken(), platform, user_ids, statistics_key});
    }

    getUsername() {
        return this.credentials.profile ? this.credentials.profile.nameOnPlatform : null;
    }

    getUserID() {
        return this.credentials.profile ? this.credentials.profile.userId : null;
    }

    getPlatform() {
        return this.credentials.profile ? this.credentials.profile.platformType : null;
    }

    getAuthToken() {
        return this.credentials.ticket ? ['Ubi_v1 t=', this.credentials.ticket].join('') : null;
    }

    getOptions() {
        return this.options;
    }

    getCredentials() {
        return this.credentials;
    }
}

module.exports = R6StatsJS;