'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_in extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product_in.init({
    date: DataTypes.DATE,
    total: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_in',
  });
  return Product_in;
};