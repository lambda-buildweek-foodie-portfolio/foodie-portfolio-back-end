const router = require('express').Router();

const Recipe = require('../models/postModel');
const restricted = require('../auth/restricted');

// GET all recipe
router.get('/', (req, res) => {
  Recipe
    .find()
    .then(portfolio => {
      res.status(200).json(portfolio);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'We had a problem with our server. Try again later.' });
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
        res.status(404).json({ message: 'The specified recipe could not be found.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'We had a problem with our server. Try again later.' });
    });
});

// POST recipe
router.post('/', restricted, (req, res) => {
  Recipe
    .add(req.body)
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json({ message: 'We had a problem with our server. Try again later.' });
    });
});

// EDIT recipe
router.put('/:id', restricted, (req, res) => {
  Recipe
    .update(req.params.id, req.body)
    .then(updated => {
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'The specified recipe could not be found.' });
      }
    })
    .catch(err => {
      err => {
        res.status(500).json({ message: 'We had a problem with our server. Try again later.' });
      }
    });
});

// DELETE recipe
router.delete('/:id', restricted, (req, res) => {
  Recipe
    .remove(req.params.id)
    .then(removed => {
      if (removed) {
        res.status(200).json(removed);
      } else {
        res.status(404).json({ message: 'The specified recipe could not be found.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'We had a problem with our server. Try again later.' });
    });
});

module.exports = router;