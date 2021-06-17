"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Boku no hero",
          synopsis: "lorem ipsum bla bla bla",
          featured_song: "wherever you are",
          budget: 100000,
          language: "Japan",
          duration: 120,
          poster_path:
            "https://foto.kontan.co.id/3td4D_XA9yJm6pLLM-BrxEa5I7U=/smart/2021/01/04/1393968090p.jpg",
          trailer_path: "https://www.youtube.com/embed/ew3lh7_DAeU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "avengers",
          synopsis: "lorem ipsum bla bla bla",
          featured_song: "andai aku bisa",
          budget: 900000,
          language: "Amerika",
          duration: 110,
          poster_path:
            "https://foto.kontan.co.id/3td4D_XA9yJm6pLLM-BrxEa5I7U=/smart/2021/01/04/1393968090p.jpg",
          trailer_path: "https://www.youtube.com/embed/ew3lh7_DAeU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "harry potter",
          synopsis: "lorem ipsum bla bla bla",
          featured_song: "good day",
          budget: 600000,
          language: "Inggris",
          duration: 110,
          poster_path:
            "https://foto.kontan.co.id/3td4D_XA9yJm6pLLM-BrxEa5I7U=/smart/2021/01/04/1393968090p.jpg",
          trailer_path: "https://www.youtube.com/embed/ew3lh7_DAeU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
