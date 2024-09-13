/* Reservas (Turista) (/reservas):
Atributos:
Nome do passeio: Nome do passeio reservado.
Local: Local onde o passeio será realizado.
Data: Data do passeio.
Status: Indica se a reserva está ativa ou cancelada.

Regras de Negócio:
Apenas turistas autenticados podem acessar suas reservas.
O turista pode cancelar a reserva diretamente por essa página.*/

const { connection } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Booking = connection.define('bookings', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
    }
});

module.exports = Booking;