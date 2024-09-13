/* Avaliações de Passeio (/avaliacoes/:id):
Atributos:
Nota: Avaliação numérica do passeio (de 0 a 5).
Comentário: Comentário sobre a experiência no passeio.

Regras de Negócio:
Apenas turistas que participaram do passeio podem avaliá-lo.
A nota e o comentário serão exibidos para outros usuários que visualizaram o passeio.*/

const { connection } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Review = connection.define('reviews', {
    note: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Review;