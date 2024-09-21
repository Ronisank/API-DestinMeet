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
const { Sequelize } = require('sequelize');
const {DataTypes} = require('sequelize');
const User = require('./User');
const Tour = require('./Tour');

const Booking = connection.define('bookings', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: Sequelize.ENUM('ativa', 'cancelada'),
        defaultValue: 'ativa',
        allowNull: false
    },
    tourId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tours',
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
}, 
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }

});

User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });
Tour.hasMany(Booking, { foreignKey: 'tourId' });
Booking.belongsTo(Tour, { foreignKey: 'tourId' });

module.exports = Booking;