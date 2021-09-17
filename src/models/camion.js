const Sequelize = require('sequelize')
const db = require('../../config/database')

const Camion = db.define('camion',{
        matricule:{
        type: Sequelize.STRING
    }
})

module.exports= Camion