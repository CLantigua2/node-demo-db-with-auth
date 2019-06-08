const db = require('../../data/dbConfig');

const getStudents = () => {
    return db('students');
}

/*
const getStudents = () => {
    return db.raw(`SELECT * FROM students`);
}
*/

const getStudent = (id) => {
    return db('students').where({ id }).first();
}

module.exports = {
    getStudents,
    getStudent
}
