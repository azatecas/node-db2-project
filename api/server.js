const express = require("express");
const helmet = require('helmet');
const CORS = require('cors');

const server = express();
server.use(helmet());
server.use(CORS());
server.use(express.json());

const carsRouter = require('../data/carsRouter.js');
server.use('api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "server is running"})
})