
exports.up = function(knex, Promise) {
  return knex.schema
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
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipe');
};
