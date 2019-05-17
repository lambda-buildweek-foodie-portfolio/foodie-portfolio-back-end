const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const postRouter = require('../routes/postRouter');
const userRouter = require('../routes/userRouter');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/recipe', postRouter);
server.use('/users', userRouter);

server.use('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;