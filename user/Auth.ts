'use strict';

import fetch from 'node-fetch';
import { EventEmitter } from 'events';
import { UserTypes, AuthParameters } from '../types/auth';
import { URLSearchParams } from 'url';

export default class Auth {
    user: UserTypes;

    async login(user: UserTypes) {
        let body: AuthParameters = user?.refresh_token ? { client_id: 'ANDR', grant_type: 'refresh_token', refresh_token: user.refresh_token } : { client_id: 'ANDR', grant_type: 'password', username: user.username, password: user.password };
        let res = await fetch(`${user.url}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(<any>body).toString()
        });
        let data = await res.json()
        EventEmitter.emit('ready')
        console.log(data)
        this.user = {...user, ...data}
        setTimeout(() => this.login(this.user), this.user.expires_in * 1000)
        
    };

    get data() {
        return this.user
    };
};