const db = require('../../data/dbConfig');

const getPosts = () => {
    return db('posts').join('students', { 'posts.student_id': 'students.id' })
}

const getPostsByUserId = (id) => {
    return db('posts').join('students', { 'posts.student_id': 'students.id' }).where({ 'students.id': id })

    //     db.raw(`
    //     SELECT *
    // FROM posts
    // JOIN students ON posts.student_id = students.id
    // WHERE posts.student_id = ${id}
    // `)
}

module.exports = {
    getPosts,
    getPostsByUserId
}