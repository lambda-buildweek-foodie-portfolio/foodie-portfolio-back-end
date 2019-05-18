const jwt = require('jsonwebtoken');

const secret = require('../auth/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secret.jwt, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ error: 'You are not logged in' });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};