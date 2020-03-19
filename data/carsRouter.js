const express = require('express');

const router = express.Router();
const Cars = require('../data/connection.js');

router.get('/', (req, res) => {
    Cars
    .select("*")
    .from('car-lot')
    .then(car => {
        res.status(200).json({car})
    })
    .catch(error => {
        res.status(500).json({errorMessage: error})
    })
})

router.post("/", (req, res) => {
    if (!req.body.VIN || !req.body.make || !req.body.model || !req.body.milage) {
      res.status(400).json({
        message: "Missing required fields"
      });
    } else {
      Cars('car-lot')
        .insert(req.body, "id")
        .then(ids => {
          res.status(201).json(ids);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            message: "Failed save vehicle!"
          });
        });
    }
  });

module.exports = router;