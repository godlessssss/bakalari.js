'use strict';

const fetch = require('node-fetch')


class Marks {
    async get({ url, access_token }) {
        let res = await fetch(`${url}/api/3/marks/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${access_token}`
            }
        })
        let data = await res.json()
        return data
    }
}

module.exports = Marks