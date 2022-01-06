const express = require('express');
const router = express.Router();
const db = require('../server/config/database')



//TestDB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' +err))

const {Ville, User, Camion, Entrepot, Grade, Livraison} = require('../models/models') // Avec la methode export

// const Ville = require('./models/Ville')


db.sync()

const app = express()
const port = 3001

const db = require('../../config/databases');

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