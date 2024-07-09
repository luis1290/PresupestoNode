'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('incomes', 'createdat', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    await queryInterface.addColumn('incomes', 'updatedat', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('incomes', 'createdat');
    await queryInterface.removeColumn('incomes', 'updatedat');
  }
};
