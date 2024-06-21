'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('spents', 'name', {
      type: Sequelize.STRING,
      allowNull: false, 
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *   npx sequelize-cli db:migrate
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
