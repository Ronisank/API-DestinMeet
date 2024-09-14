'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.ENUM('guia', 'turista'),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
      await queryInterface.createTable('tours', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        local: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING(500),
        },
        preco: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });

      await queryInterface.createTable('bookings', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        status: {
          type: Sequelize.ENUM('ativa', 'cancelada'),
          defaultValue: 'ativa',
          allowNull: false,
        },
        tourId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'tours',
            key: 'id',
          },
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });

      await queryInterface.createTable('reviews', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        comentario: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        nota: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        tourId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'tours',
            key: 'id',
          },
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });

    },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('reviews');
      await queryInterface.dropTable('bookings');
      await queryInterface.dropTable('tours');
      await queryInterface.dropTable('users');
    }
  };
