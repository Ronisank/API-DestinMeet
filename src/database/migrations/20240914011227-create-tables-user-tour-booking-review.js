'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: { msg: 'Invalid email format' },
          }
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        type_user: {
          type: Sequelize.ENUM('guia', 'turista'),
          allowNull: false
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
      await queryInterface.createTable('tours', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [1, 100]
          }
        },
        local: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING(500),
          allowNull: true
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            isDecimal: true
          }
        },
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        userId: {
          type: Sequelize.INTEGER,
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

      await queryInterface.createTable('bookings', {
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
            model: 'users',
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

      await queryInterface.createTable('reviews', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        note: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 0,
            max: 5
          }
        },
        comment: {
          type: Sequelize.STRING(500),
          allowNull: true
        },
        tourId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'tours',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
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

    },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('reviews');
      await queryInterface.dropTable('bookings');
      await queryInterface.dropTable('tours');
      await queryInterface.dropTable('users');
    }
  };
