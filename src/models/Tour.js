/* Cadastro de Novo Passeio (/passeio/novo):
Atributos:
Nome do passeio: Campo obrigatório, não deve ultrapassar 100 caracteres.
Local: Campo obrigatório, descrevendo o local onde o passeio será realizado.
Descrição: Campo opcional, com limite de 500 caracteres.
Preço: Valor cobrado pelo passeio, obrigatório.
Data: Data em que o passeio será realizado, obrigatório.*/

const { connection } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Tour = connection.define('tours', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Tour;