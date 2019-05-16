const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const postRoutes = require('../routes/postRoutes');
const userRoutes = require('../routes/userRoutes');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/recipe', postRoutes);
server.use('/users', userRoutes);

module.exports = server;