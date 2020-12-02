'use strict';

import HTTPHandler from './HTTPHandler'


export default class Homeworks extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'homeworks')
    }
};