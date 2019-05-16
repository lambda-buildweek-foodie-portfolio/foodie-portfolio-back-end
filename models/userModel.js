const db = require('../data/dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  add
};

function find() {
  return db('chefs')
    .select('id', 'username', 'password');
}

function findBy(filter) {
  return db('chefs')
    .where(filter);
}

function findById(id) {
  return db('chefs')
    .where({ id })
    .first();
}

function add(user) {
  return db('chefs')
    .insert(user, 'id')
    .then(([id]) => {
      return findById(id);
    });
}