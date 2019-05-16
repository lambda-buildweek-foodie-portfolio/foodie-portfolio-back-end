const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db('chefs');
}

function findById(id) {
  return db('chefs')
    .where({ id })
    .first();
}

function add(recipe) {
  return db('chefs')
    .insert(recipe, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('chefs')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db('chefs')
    .where({ id })
    .del();
}