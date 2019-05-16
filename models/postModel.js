const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db('recipe');
}

function findById(id) {
  return db('recipe')
    .where({ id })
    .first();
}

function add(recipe) {
  return db('recipe')
    .insert(recipe, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('recipe')
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
  return db('recipe')
    .where({ id })
    .del();
}