const students = require('./studentHelper')
const posts = require('./postHelper')
const auth = require('./authHelper')

module.exports = {
    ...students,
    ...posts,
    ...auth
}