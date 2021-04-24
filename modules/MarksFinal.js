'use strict';

const HTTPHandler = require('./HTTPHandler');


class MarksFinal extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'marks/final', 'GET', 'application/x-www-form-urlencoded')
    }
}

module.exports = MarksFinal