'use strict';

import User from "./user/User";
import Auth from "./user/Auth";
import HTTPHandler from "./modules/HTTPHandler";
import Marks from "./modules/Marks";
import Subjects from "./modules/Subjects";
import Absence from "./modules/Absence";
import Events from "./modules/Events";
import Homeworks from "./modules/Homeworks";
import UserInfo from "./modules/UserInfo";

module.exports = {
    User: User,
    Auth: Auth,
    HTTPHandler: HTTPHandler,
    Modules: {
        Marks: Marks,
        Subjects: Subjects,
        Absence: Absence,
        Events: Events,
        Homeworks: Homeworks,
        UserInfo: UserInfo
    }
}