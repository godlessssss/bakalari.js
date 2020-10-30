'use strict';

const fetch = require('node-fetch')
const EventEmitter = require('events')

class User extends EventEmitter {
    constructor(url, username, password) {
        super();
        this.url = url;
        this.username = username;
        this.password = password;
    };

    async login() {
        let res = await fetch(`${this.url}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `client_id=ANDR&grant_type=password&username=${this.username}&password=${this.password}`
        })
        let data = await res.json()
        this.access_token = data.access_token;
        this.refresh_token = data.refresh_token;
        this.emit('ready')
    }

    refreshToken() {
        fetch(`${this.url}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `client_id=ANDR&grant_type=refresh_token&refresh_token=${this.refresh_token}`
        }).then(res => res.json()).then(data => {
            this.access_token = data.access_token;
            this.refresh_token = data.refresh_token;
        });
    }

    get(moduleType) {
        return new moduleType().get({ url: this.url, access_token: this.access_token })
    }

};

module.exports = User;