const express = require("express");
const helmet = require('helmet');
const CORS = require('cors');
const carsRouter = require('../data/carsRouter.js');

const server = express();

server.use(CORS());
server.use(helmet());
server.use(express.json());


server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "server is running"})
})

module.exports = server;