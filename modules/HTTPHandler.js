'use strict';

const fetch = require('node-fetch');

class HTTPHandler {
    async getData(url, access_token, moduleName, method, contentType, body) {
        const fetchSet = {
            method: method,
            headers: {
                'Content-Type': contentType,
                'Authorization': `Bearer ${access_token}`
            },
        }

        if(method === 'POST') fetchSet.body = body;

        let res = await fetch(`${url}/api/3/${moduleName}`, fetchSet);
        let data = await res.json()
        return data
    }
};

module.exports = HTTPHandler;