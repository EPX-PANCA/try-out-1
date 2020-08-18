'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_out extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product_out.init({
    date: DataTypes.DATE,
    total: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_out',
  });
  return Product_out;
};