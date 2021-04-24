'use strict';

const HTTPHandler = require('./HTTPHandler');
const fetch = require('node-fetch');

class Whatif extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token, args }) {

        const marks = await this.getData(url, access_token, 'marks');
        const subjectId = args[0][0].SubjectId;

        let requiredSubjectMarks = marks.Subjects.find(subj => Number(subj.Subject.Id) === Number(subjectId));

        if(!requiredSubjectMarks) return console.error('ERROR: Cannot find specified subject by id');
        requiredSubjectMarks = requiredSubjectMarks.Marks;

        const fullArray = requiredSubjectMarks.concat(args[0]);

        const result = fetch(`${url}/api/3/marks/what-if`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': `Bearer ${access_token}` },
            body: JSON.stringify(fullArray)
        
        }).then(res => res.json()).then(data => {
            return data;
        });

        return result;
    }
}

module.exports = Whatif