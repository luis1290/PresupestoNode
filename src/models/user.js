'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */


    static associate(models) {
      // define association here
      users.hasMany(models.spents, { foreignKey: 'user_id' });
      users.hasMany(models.incomes, { foreignKey: 'user_id' });
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    url_avatar: DataTypes.STRING,
    validate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};