const { connection } = require('../database/connection');
const { DataTypes } = require('sequelize');

const User = connection.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: 'Invalid email format' },
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_user: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;