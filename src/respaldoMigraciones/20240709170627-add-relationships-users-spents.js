'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('spents', {
      fields: ['user_id'], // Campo que será la clave foránea
      type: 'foreign key',
      name: 'fk_spents_userId', // Nombre de la clave foránea
      references: {
        table: 'users', // Tabla referenciada
        field: 'id', // Clave primaria de la tabla referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('spents', {
      fields: ['category_id'], // Campo que será la clave foránea
      type: 'foreign key',
      name: 'fk_categoryspent_categoryId', // Nombre de la clave foránea
      references: {
        table: 'categoryspents', // Tabla referenciada
        field: 'id', // Clave primaria de la tabla referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('spents', 'fk_spents_userId');
    await queryInterface.removeConstraint('spents', 'fk_categoryspent_categoryId');
  }
};
