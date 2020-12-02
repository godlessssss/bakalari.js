'use strict';

import HTTPHandler from './HTTPHandler'


export default class Subjects extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'subjects')
    }
};