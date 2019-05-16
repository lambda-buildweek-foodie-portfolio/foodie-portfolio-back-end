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

router.get('/', (req, res) => {
  db('recipe')
    .then(portfolio => {
      res.status(200).json(portfolio);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/:id', (req, res) => {
  res.send('GET recipe by id');
});

router.post('/', (req, res) => {
  res.send('ADD a recipe');
});

router.put('/:id', (req, res) => {
  res.send('MODIFY a recipe');
});

router.delete('/:id', (req, res) => {
  res.send('REMOVE a recipe');
});

module.exports = router;