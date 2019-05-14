const knex = require('knex');
const config = require('../knexfile');

const db_env = process.env.DB_ENV || 'development';

module.exports = knex(config[db_env]);