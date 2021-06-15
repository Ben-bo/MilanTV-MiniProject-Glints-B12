'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reviews', [{
      review: 'lorem ipsum bla bla bla',
      rating: 5,
      user_id: 2,
      movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      review: 'lorem ipsum bla bla bla',
      rating: 4,
      user_id: 3,
      movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};