"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("students", "fName", "first_name");
  },

  down: async (queryInterface, Sequelize) => {
    async (queryInterface, Sequelize) => {
      await queryInterface.renameColumn("students", "first_name", "fName");
    };
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("students", "last_name", {
      type: Sequelize.String,
    });
    await queryInterface.sequelize.query("UPDATE students SET last_name = Doe");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("students", "last_name");
  },
};
