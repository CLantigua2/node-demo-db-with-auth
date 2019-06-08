const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');

const register = (creds) => {
    if (creds.password) {
        const hash = bcrypt.hashSync(creds.password, 14);
        creds.password = hash;
        return db('students').insert(creds)
    } else {
        throw new Error('no password provided');
    }
}

const login = (creds) => {
    if (creds.username && creds.password) {
        return db('students').where({ username: creds.username })
            .first()
    } else {
        throw new Error('credentails do not match')
    }
}

module.exports = {
    register,
    login
}