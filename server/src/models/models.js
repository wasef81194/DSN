const Sequelize = require('sequelize')
const db = require('../../config/database')

const Ville = db.define('ville', {
    nom_ville: {
        type: Sequelize.STRING
    }
})
const Camion = db.define('camion', {
    matricule: {
        type: Sequelize.STRING(7)
    },
    marque: {
        type: Sequelize.STRING(50)
    },
    modele: {
        type: Sequelize.STRING(50)
    }
})
const Entrepot = db.define('entrepot', {
    nom_entrepot: {
        type: Sequelize.STRING(50)
    }
})


const Grade = db.define('grade', {
    grade: {
        type: Sequelize.CHAR(1), primaryKey: true
    }
})

const Livraison = db.define('livraison', {
    nombre_poulet: {
        type: Sequelize.BIGINT(4)
    },
    temperature: {
        type: Sequelize.FLOAT
    },
    date: {
        type: Sequelize.DATE
    }
})

const User = db.define('user', {
    nom: {
        type: Sequelize.STRING(50)
    },
    prenom: {
        type: Sequelize.STRING(50)
    },
    password: {
        type: Sequelize.STRING(50)
    }
})
Ville.hasOne(Entrepot);
Entrepot.hasOne(Livraison);
User.hasOne(Livraison);
Camion.hasOne(User);
Grade.hasOne(User);

module.exports = Ville;
module.exports = Camion;
module.exports = Entrepot;
module.exports = Livraison;
module.exports = Grade;
module.exports = User;