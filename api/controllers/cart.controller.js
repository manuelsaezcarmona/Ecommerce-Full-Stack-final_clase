const Cart = require('../models/cart.model.js');

async function getAllCarts({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'product.product',
        select: ['price', 'stock', 'name']
      });
    res.json(cartItems);
  } catch (error) {
    console.log(error.message);
  }
}

async function createOneCart() {}
async function getOneById() {}
async function updateOneById() {}
async function deleteOneById() {}

module.exports = {
  getAllCarts,
  createOneCart,
  getOneById,
  updateOneById,
  deleteOneById
};
