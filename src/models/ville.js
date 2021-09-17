const Sequelize = require('sequelize')
const db = require('../../config/database')

const Ville = db.define('ville',{
    Name:{
        type: Sequelize.STRING
    }
})
    