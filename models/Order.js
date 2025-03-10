const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: 'id' }
  },
  totalAmount: DataTypes.DECIMAL(10, 2),
  status: DataTypes.STRING,
});

module.exports = Order;
