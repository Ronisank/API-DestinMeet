const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config.js');

const connection = new Sequelize(databaseConfig);

module.exports = { connection }; //? Export the connection with the database