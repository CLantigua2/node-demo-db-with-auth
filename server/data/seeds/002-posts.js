const faker = require('faker');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { post: faker.lorem.words(20), student_id: 1 },
        { post: faker.lorem.words(20), student_id: 1 },
        { post: faker.lorem.words(20), student_id: 1 },
        { post: faker.lorem.words(20), student_id: 1 },
        { post: faker.lorem.words(20), student_id: 2 },
        { post: faker.lorem.words(20), student_id: 2 },
        { post: faker.lorem.words(20), student_id: 2 },
        { post: faker.lorem.words(20), student_id: 1 },
        { post: faker.lorem.words(20), student_id: 1 },
        { post: faker.lorem.words(20), student_id: 3 },
        { post: faker.lorem.words(20), student_id: 3 },
        { post: faker.lorem.words(20), student_id: 3 },
      ]);
    });
};
