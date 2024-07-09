'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incomes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */


    static associate(models) {
      // define association here
      incomes.belongsTo(models.users, { foreignKey: 'user_id' });
      incomes.belongsTo(models.categoryincomes, { foreignKey: 'category_id' });
    }
  }
  incomes.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'incomes',
  });
  return incomes;
};