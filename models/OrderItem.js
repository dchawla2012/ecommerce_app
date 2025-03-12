const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = sequelize.define('OrderItem', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderId: {
    type: DataTypes.INTEGER,
    references: { model: Order, key: 'id' }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: { model: Product, key: 'id' }
  },
  quantity: DataTypes.INTEGER,
  priceAtPurchase: DataTypes.DECIMAL(10, 2),
});

module.exports = OrderItem;
