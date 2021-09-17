const Sequelize = require('sequelize')
const db = require('../../config/databases')

const Ville = db.define('ville', {
    Name: {
        type: Sequelize.STRING
    },
    adress: {
        type: Sequelize.STRING
    }
})

module.exports = Ville;