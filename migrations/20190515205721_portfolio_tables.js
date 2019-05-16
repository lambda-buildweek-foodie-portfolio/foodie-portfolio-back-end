
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
      tbl.string('firstname', 128);
      tbl.string('lastname', 128);
    })
    .createTable('recipe', tbl => {
      tbl.increments();
      tbl
        .string('title', 255).notNullable();
      tbl.string('mealtype', 128).notNullable();
      tbl.text('ingredients').notNullable();
      tbl.text('instructions').notNullable();
      tbl.string('image');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('chefs')
    .dropTableIfExists('recipe');
};
