const express = require('express');
const router = express.Router();

const db = require('../../config/data');
const {City} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(cities => {
      console.log(cities)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

module.exports = router