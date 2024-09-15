/* Cadastro de Novo Passeio (/passeio/novo):
Atributos:
Nome do passeio: Campo obrigatório, não deve ultrapassar 100 caracteres.
Local: Campo obrigatório, descrevendo o local onde o passeio será realizado.
Descrição: Campo opcional, com limite de 500 caracteres.
Preço: Valor cobrado pelo passeio, obrigatório.
Data: Data em que o passeio será realizado, obrigatório.*/

const { connection } = require('../database/connection');
const { DataTypes, Sequelize} = require('sequelize');

const User = require('./User');

const Tour = connection.define('tours', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 100]
        }
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
},
    {
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['name', 'userId']  // Nome único por guia
            }
        ]
    });

User.hasMany(Tour, { foreignKey: 'userId' });
Tour.belongsTo(User, { foreignKey: 'userId' });

module.exports = Tour;