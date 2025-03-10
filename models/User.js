const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    address: DataTypes.STRING,
});

module.exports = User;