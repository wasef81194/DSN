const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const { Ville, User } = require('./models');

router.get('/', (req, res, next) => {
    Ville.findAll()
    .then(villes => {
        console.log(villes)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res, next) => {  // pour faire un insert
    Ville.create(req.body)
    .then(villes => {
        console.log(villes)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})


module.exports = router