'use strict';

const HTTPHandler = require('./HTTPHandler');


class Substitutions extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'substitutions')
    }
}

module.exports = Substitutions