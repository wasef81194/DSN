
const Sequelize = require('sequelize')

module.exports = new Sequelize('app_db', 'db_user', 'db_user_pass', {
    host: 'db',
    dialect: 'mysql',
    operatorsAliases: false, 
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})