'use strict';

const HTTPHandler = require('./HTTPHandler');


class UserInfo extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'user', 'GET', 'application/x-www-form-urlencoded')
    }
}

module.exports = UserInfo