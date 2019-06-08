// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/data/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './server/data/seeds'
    }
  },
};
