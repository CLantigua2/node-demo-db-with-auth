
exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments();
        tbl.text('post').notNullable()

        tbl.integer('student_id')
            .references('id')
            .inTable('students')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('posts')
};
