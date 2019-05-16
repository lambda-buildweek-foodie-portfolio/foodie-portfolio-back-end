const knex = require('knex');
const router = require('express').Router();

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/portfolio.db3'
  },
  useNullAsDefault: true
}

const db = knex(knexConfig);

// GET all recipe
router.get('/', (req, res) => {
  db('recipe')
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
  db('recipe')
    .where({ id: req.params.id })
    .first()
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
  db('recipe')
    .insert(req.body, ['id', 'title'])
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// EDIT recipe
router.put('/:id', (req, res) => {
  db('recipe')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `${count} recipe updated` });
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
  db('recipe')
    .where({ id: req.params.id })
    .delete()
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `${count} recipe deleted` });
      } else {
        res.status(404).json({ message: 'Recipe does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;