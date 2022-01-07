const express = require('express')
const crypto = require('crypto')
//Database
const db = require('../config/database')
const { TablesAPI } = require('./routes/index')

//const { connected } = require('process')

const bodyParser = require('body-parser');

//TestDB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' +err))

const {Ville, User, Camion, Entrepot, Grade, Livraison} = require('./models/index') // Avec la methode export


db.sync()

const app = express()
const port = 3001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/api/tables', TablesAPI)

app.get('/', (req, res) => {
    res.send('heooo')
})

/* app.get('/sha1', (req, res) => {
    const s = req.query.s
    if ((s == null) || (s.length == 0)) {
        res.status(400).send({message: "An error occurs: null or empty string"})
    }
    const shasum = crypto.createHash('sha1')
    shasum.update(s)
    const hashedValue = shasum.digest('hex') // => "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"

    res.json({"hash": hashedValue})
}) */

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
