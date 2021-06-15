'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movie_actors', [{
        movie_id: 1,
        character_name: 'captain america',
        real_name: 'evan',
        photo_path: 'https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_id: 1,
        character_name: 'Iron Man',
        real_name: 'Robert Downey Jr',
        photo_path: 'https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movie_actors', null, {});
  }
};