const express = require('express');

const router = express.Router();
const Cars = require('../data/connection.js');

router.get('/', (req, res) => {
    Cars('cars')
    .then(res => {
        res.status(200).json({res})
    })
    .catch(error => {
        res.status(500).json({errorMessage: error})
    })
})