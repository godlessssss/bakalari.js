'use strict';

const HTTPHandler = require('./HTTPHandler');


class Homeworks extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'homeworks', 'GET', 'application/x-www-form-urlencoded', '')
    }
}

module.exports = Homeworks