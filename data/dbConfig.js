const knex = require('knex');
const knexConfig = require('../knexfile');

const db_env = process.env.DB_ENV || 'production';

module.exports = knex(knexConfig[db_env]);