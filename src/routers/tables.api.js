const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const { Table } = require('../models');

router.get('/', (req, res, next) => {
    Table.findAll()
    .then(tables => {
        console.log(tables)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

module.exports = router