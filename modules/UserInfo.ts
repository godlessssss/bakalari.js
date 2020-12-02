'use strict';

import HTTPHandler from './HTTPHandler'

export default class UserInfo extends HTTPHandler {
    url: string
    access_token: string
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'user')
    }
};