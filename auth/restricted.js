const bcrypt = require('bcryptjs');

const Chefs = require('../models/userModel');

function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    Chefs
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
  } else {
    res.status(400).json({ message: 'Please provide credentials' });
  }
};

module.exports = restricted;