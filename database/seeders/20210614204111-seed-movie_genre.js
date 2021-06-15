'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movie_genres', [{
        movie_id: 2,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_id: 2,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movie_genres', null, {});
  }
};