'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */


    static associate(models) {
      // define association here
      spents.belongsTo(models.users, { foreignKey: 'user_id' });
      spents.belongsTo(models.categoryspents, { foreignKey: 'category_id' });
    }
  }
  spents.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    description: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'spents',
  });
  return spents;
};