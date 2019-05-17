
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
    })
    .createTable('recipe', tbl => {
      tbl.increments();
      tbl.string('title', 255).notNullable();
      tbl.string('mealType', 128).notNullable();
      tbl.text('ingredients').notNullable();
      tbl.text('instructions').notNullable();
      tbl.string('image');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('chefs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('chefs')
    .dropTableIfExists('recipe');
};
