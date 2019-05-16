const knex = require('knex');
const router = require('express').Router();

const db = require('../data/dbConfig');

// GET all users
router.get('/', (req, res) => {
  db('chefs')
    .then(chefs => {
      res.status(200).json(chefs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET user by ID
router.get('/:id', (req, res) => {
  db('chefs')
    .where({ id: req.params.id })
    .first()
    .then(chef => {
      if (chef) {
        res.status(200).json(chef);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// POST user
router.post('/', (req, res) => {
  db('chefs')
    .insert(req.body, ['id', 'username'])
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// EDIT user
router.put('/:id', (req, res) => {
  db('chefs')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `${count} user(s) updated` });
      } else {
        res.status(404).json({ message: 'User does not exist' });
      }
    })
    .catch(err => {
      err => {
        res.status(500).json(err);
      }
    });
});

// DELETE user
router.delete('/:id', (req, res) => {
  db('chefs')
    .where({ id: req.params.id })
    .delete()
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `${count} user(s) deleted` });
      } else {
        res.status(404).json({ message: 'User does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;