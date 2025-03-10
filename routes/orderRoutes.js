// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { Order, Product, OrderItem, sequelize} = require('../models');

// Get all orders with associated products (via OrderItem)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ 
        model: Product, 
        through: { attributes: ['quantity', 'priceAtPurchase'] } 
      }]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an order by id with its products and order item details
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [{ 
        model: Product, 
        through: { attributes: ['quantity', 'priceAtPurchase'] } 
      }]
    });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { userId, totalAmount, status, orderItems } = req.body;

    const order = await Order.create({ userId, totalAmount, status }, {transaction: t});
    if (orderItems && orderItems.length > 0) {
        for (const item of orderItems) {
            await OrderItem.create({
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                priceAtPurchase: item.priceAtPurchase
            }, { transaction: t});
        }
    }

    await t.commit();
    const createdOrder = await Order.findByPk(order.id, {
        include: [{
            model: Product,
            through: { attributes: ['quantity', 'priceAtPurchase'] }
        }]
    });

    res.status(201).json(createdOrder);
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
});

// Update an order (e.g., update order status)
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    await order.destroy();
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
