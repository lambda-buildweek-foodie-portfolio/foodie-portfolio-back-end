const router = require('express').Router();

const Recipe = require('../models/postModel');

// GET all recipe
router.get('/', (req, res) => {
  Recipe
    .find()
    .then(portfolio => {
      res.status(200).json(portfolio);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET recipe by ID
router.get('/:id', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: 'Recipe not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// POST recipe
router.post('/', (req, res) => {
  Recipe
    .add(req.body)
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// EDIT recipe
router.put('/:id', (req, res) => {
  Recipe
    .update(req.params.id, req.body)
    .then(updated => {
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Recipe does not exist' });
      }
    })
    .catch(err => {
      err => {
        res.status(500).json(err);
      }
    });
});

// DELETE recipe
router.delete('/:id', (req, res) => {
  Recipe
    .remove(req.params.id)
    .then(removed => {
      if (removed) {
        res.status(200).json(removed);
      } else {
        res.status(404).json({ message: 'Recipe does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;