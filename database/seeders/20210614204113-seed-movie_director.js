"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Movie_directors",
      [
        {
          movie_id: 1,
          director_name: "bambang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movie_id: 1,
          director_name: "tulus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movie_directors", null, {});
  },
};
