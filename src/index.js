const express = require('express')
const crypto = require('crypto')
//Database
const db = require('../config/databases')

const { connected } = require('process')

//TestDB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' +err))

const {Ville} = require('./models/index') // Avec la methode export

// const Ville = require('./models/Ville')


db.sync()


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
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
