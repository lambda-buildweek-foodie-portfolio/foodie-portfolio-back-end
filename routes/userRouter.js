const router = require('express').Router();
const bcrypt = require('bcryptjs');

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

// CREATE user
router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);

  user.password = hash;

  Chefs
    .add(user)
    .then(saved => {
      res.status(200).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// LOG IN user
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Chefs
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `${user.username} has successfully logged in` });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;