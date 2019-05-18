const knexCleaner = require('knex-cleaner');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knexCleaner.clean(knex);
};
