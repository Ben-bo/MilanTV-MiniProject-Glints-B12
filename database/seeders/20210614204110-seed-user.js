'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        full_name: 'Admin',
        email: 'Admin@gmail.com',
        password: '$2y$12$6ip84WWmFCGqJGrFC1SxreSK6UwqtahD457.kW5HIi2O9K4joiFai',
        photo_path: 'https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg',
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
          full_name: 'John Doe',
          email: 'user1@gmail.com',
          password: '$2y$12$6ip84WWmFCGqJGrFC1SxreSK6UwqtahD457.kW5HIi2O9K4joiFai',
          photo_path: 'https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg',
          role: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: 'mira',
          email: 'user2@gmail.com',
          password: '$2y$12$6ip84WWmFCGqJGrFC1SxreSK6UwqtahD457.kW5HIi2O9K4joiFai',
          photo_path: 'https://lh3.googleusercontent.com/proxy/WPbe6PuEi-pkJvmJGflSvcI9uc_5MC4fnhYWe_Ssb7BhRcHsa0QkUIpjbep2NpXyExh4cbbLmF4u0VTQaHbZtVjVceOiwEx6dKysHhyRCHh5-sZ32a33JPZJyZjGyIOvsQ',
          role: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};