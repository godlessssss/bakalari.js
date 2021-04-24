'use strict';

const HTTPHandler = require('./HTTPHandler');

class Whatif extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token, args }) {

        const marks = await this.getData(url, access_token, 'marks', 'GET', 'application/x-www-form-urlencoded', '');
        const subjectId = args[0][0].SubjectId;

        let requiredSubjectMarks = marks.Subjects.find(subj => Number(subj.Subject.Id) === Number(subjectId));

        if(!requiredSubjectMarks) return console.error('ERROR: Cannot find specified subject by id');
        requiredSubjectMarks = requiredSubjectMarks.Marks;

        const fullArray = requiredSubjectMarks.concat(args[0]);
        const result = await this.getData(url, access_token, 'marks/what-if', 'POST', 'application/json; charset=utf-8', JSON.stringify(fullArray));

        return result;
    }
}

module.exports = Whatif