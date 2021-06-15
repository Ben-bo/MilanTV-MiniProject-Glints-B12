'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movie_actors', {
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
      character_name: {
        type: Sequelize.STRING
      },
      real_name: {
        type: Sequelize.STRING
      },
      photo_path: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Movie_actors');
  }
};