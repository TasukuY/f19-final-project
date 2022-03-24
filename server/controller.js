const test = require('./db.json');

require('dotenv').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getMessages: (req, res) => {
        res.status(200).send(test);
    }
}