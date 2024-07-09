'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('categoryspents', 'createdat', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    await queryInterface.addColumn('categoryspents', 'updatedat', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('categoryspents', 'createdat');
    await queryInterface.removeColumn('categoryspents', 'updatedat');
  }
};
