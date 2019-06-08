
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { username: 'carlos', password: 'easy password' },
        { username: 'jenny', password: 'not easy password' },
        { username: 'Nataly', password: 'ultra difficult password' }
      ]);
    });
};
