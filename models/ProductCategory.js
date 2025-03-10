const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Product = require('./Product');
const Category = require('./Category');

const ProductCategory = sequelize.define('ProductCategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  productId: {
    type: DataTypes.INTEGER,
    references: { model: Product, key: 'id' }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: { model: Category, key: 'id' }
  }
});

module.exports = ProductCategory;