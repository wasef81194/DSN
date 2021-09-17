const express = require('express');
const crypto = require('crypto');
const bodyPArser = require('body-parser')

const db = require('../config/data');
db.sync()

//const router = require("./routes/router_truck")

// Authenticate.
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' +err)) // @NicoLaDta: utilise le niveau de log "error" (car c 1 erreur) ! => console.error()

const { City, Truck, Temperature } = require('./models')


//const { City } = require('./models/index')
/*const { City } = require('./models')*/

db.sync() // Synchronize database

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sha1', (req, res) => {
  const s = req.query.s
  if ((s == null) || (s.length == 0)) {
      res.status(400).send({message: "An error occurs: null or empty string"})
  }






  const shasum = crypto.createHash('sha1')
  shasum.update(s)
  const hashedValue = shasum.digest('hex') // => "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"

  res.json({"hash": hashedValue})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*app.get('/', (req, res) => {
    res.send('Hello World!')
})*/

/*app.get('/formulaire', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.get('/sha1', (req, res) => {
    const s = req.query.s
    if ((s == null) || (s.length == 0)) {
        res.status(400).send({message: "An error occurs: null or empty string"})
    }






    const shasum = crypto.createHash('sha1')
    shasum.update(s)
    const hashedValue = shasum.digest('hex') // => "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"

    res.json({"hash": hashedValue})
})*/


