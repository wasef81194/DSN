const express = require('express')
const crypto = require('crypto')
const bodyParser = require('body-parser')



//database
const db = require('../config/database');




//test db
db.authenticate()
    .then(()=> console.log('Database connected...'))
    .catch(err => console.log('Error: ' +err))

const {Ville,Camion} = require('./models') 
db.sync()




const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/formulaire', (req, res) => {
    res.sendFile(__dirname + '/formulaire.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})