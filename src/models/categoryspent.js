'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoryspents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */


    static associate(models) {
      // define association here
      categoryspents.hasMany(models.spents, { foreignKey: 'category_id' })
    }
  }
  categoryspents.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoryspents',
  });
  return categoryspents;
};