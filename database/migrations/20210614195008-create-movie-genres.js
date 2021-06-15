'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movie_genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // WorkingDays hasMany Users n:n
          model: 'Movies',
          key: 'id'
        }
      },
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // WorkingDays hasMany Users n:n
          model: 'Genres',
          key: 'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movie_genres');
  }
};