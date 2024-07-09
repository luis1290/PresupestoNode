'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('incomes', {
      fields: ['user_id'], // Campo que será la clave foránea
      type: 'foreign key',
      name: 'fk_incomes_userId', // Nombre de la clave foránea
      references: {
        table: 'users', // Tabla referenciada
        field: 'id', // Clave primaria de la tabla referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('incomes', {
      fields: ['category_id'], // Campo que será la clave foránea
      type: 'foreign key',
      name: 'fk_categoryincome_categoryId', // Nombre de la clave foránea
      references: {
        table: 'categoryincomes', // Tabla referenciada
        field: 'id', // Clave primaria de la tabla referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('incomes', 'fk_incomes_userId');
    await queryInterface.removeConstraint('incomes', 'fk_categoryincome_categoryId');
  }
};
