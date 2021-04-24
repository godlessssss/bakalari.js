'use strict';

const HTTPHandler = require('./HTTPHandler');


class Timetable extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token, args }) {
        let endpoint = 'timetable/permanent'
        if (args[0] === 'actual') {
            let date = new Date()
            endpoint = `timetable/actual?date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
        return this.getData(url, access_token, endpoint, 'GET', 'application/x-www-form-urlencoded')
    }
}

module.exports = Timetable