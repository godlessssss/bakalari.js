'use strict';

import Auth from './Auth';
import { EventEmitter } from 'events';

const Authenticator = new Auth()

export default class User extends EventEmitter {
    url: string;
    username: string;
    password: string;
    access_token: string;
    constructor(url, username, password) {
        super();
        this.url = url;
        this.username = username;
        this.password = password;
    };

    login() {
        Authenticator.login({url: this.url, username: this.username, password: this.password});
    }

    get(moduleType) {
        return new moduleType().get({ url: this.url, access_token: this.access_token });
    }

};