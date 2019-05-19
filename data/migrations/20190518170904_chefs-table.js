
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('chefs', tbl => {
      tbl.increments();
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl.string('password', 128).notNullable();
      tbl.string('location', 128).notNullable();
      tbl.text('email');
      tbl.string('firstName', 128);
      tbl.string('lastName', 128);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('chefs');
};
