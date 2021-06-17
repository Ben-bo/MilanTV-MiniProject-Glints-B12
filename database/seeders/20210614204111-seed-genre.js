"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Anime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Action",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Genres", null, {});
  },
};
