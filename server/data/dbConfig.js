const knex = require('knex');
const knexConfig = require('../../knexfile');

let env = 'development';

module.exports = knex(knexConfig[env]);