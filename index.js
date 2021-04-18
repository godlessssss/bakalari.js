'use strict';

module.exports = {
    User: require('./user/User'),
    HTTPHandler: require('./modules/HTTPHandler'),
    Modules: {
        Marks: require('./modules/Marks'),
        Subjects: require('./modules/Subjects'),
        Absence: require('./modules/Absence'),
        Events: require('./modules/Events'),
        Homeworks: require('./modules/Homeworks'),
        UserInfo: require('./modules/UserInfo'),
        Timetable: require('./modules/Timetable'),
        Substitutions: require('./modules/Substitutions')
    }
}