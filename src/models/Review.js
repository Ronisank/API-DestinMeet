/* Avaliações de Passeio (/avaliacoes/:id):
Atributos:
Nota: Avaliação numérica do passeio (de 0 a 5).
Comentário: Comentário sobre a experiência no passeio.

Regras de Negócio:
Apenas turistas que participaram do passeio podem avaliá-lo.
A nota e o comentário serão exibidos para outros usuários que visualizaram o passeio.*/

const { connection } = require('../database/connection');
const { DataTypes, Sequelize } = require('sequelize');
const {DataTypes} = require('sequelize');
const User = require('./User');
const Tour = require('./Tour');

const Review = connection.define('reviews', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
    comment: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    tourId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tours',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
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

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });
Tour.hasMany(Review, { foreignKey: 'tourId' });
Review.belongsTo(Tour, { foreignKey: 'tourId' });

module.exports = Review;