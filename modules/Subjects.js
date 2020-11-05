'use strict';

const HTTPHandler = require('./HTTPHandler');


class Subjects extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'subjects')
    }
}

module.exports = Subjects