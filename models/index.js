const sequelize = require('../db');

const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const ProductCategory = require('./ProductCategory');
const Review = require('./Review');

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.belongsToMany(Category, { through: ProductCategory, foreignKey: 'productId'});
Category.belongsToMany(Product, { through: ProductCategory, foreignKey: 'categoryId'});

Order.belongsToMany(Product, { 
    through: OrderItem, 
    foreignKey: 'orderId', 
    otherKey: 'productId'
});
Product.belongsToMany(Order, { 
    through: OrderItem, 
    foreignKey: 'productId', 
    otherKey: 'orderId'
});

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

module.exports = {
    sequelize,
    User,
    Product,
    Category,
    Order,
    OrderItem,
    Review,
    ProductCategory,
};