const router = require('express').Router();

const Chefs = require('../models/userModel');

// GET all users
router.get('/', (req, res) => {
  Chefs
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET user by ID
router.get('/:id', (req, res) => {
  Chefs
    .findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
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
  Chefs
    .add(req.body)
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// EDIT user
router.put('/:id', (req, res) => {
  Chefs
    .update(req.params.id, req.body)
    .then(updated => {
      if (updated) {
        res.status(200).json(updated);
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
  Chefs
    .remove(req.params.id)
    .then(removed => {
      if (removed) {
        res.status(200).json(removed);
      } else {
        res.status(404).json({ message: 'User does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;