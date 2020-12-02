'use strict';

import HTTPHandler from './HTTPHandler'


export default class Absence extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'absence/student')
    }
}