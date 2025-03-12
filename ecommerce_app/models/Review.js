const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');
const Product = require('./Product');

const Review = sequelize.define('Review', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: 'id' }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: { model: Product, key: 'id' }
  },
  rating: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
});

module.exports = Review;
