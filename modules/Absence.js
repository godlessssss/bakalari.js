'use strict';

const HTTPHandler = require('./HTTPHandler');


class Absence extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'absence/student', 'GET', 'application/x-www-form-urlencoded', '')
    }
}

module.exports = Absence