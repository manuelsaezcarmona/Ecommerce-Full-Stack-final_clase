const express = require('express');

const router = express.Router();
/* const { Router } = require('express');
const router = new Router(); */

const {
  getAllCarts,
  createOneCart,
  getOneById,
  updateOneById,
  deleteOneById
} = require('../controllers/cart.controller.js');
//router.get('/, .controller')
//router.post('/, .controller')

// tambien se puede agrupar rutas
router
  .route('/')
  .get(getAllCarts)
  .post(createOneCart);

router
  .route('/:id')
  .get(getOneById)
  .patch(updateOneById)
  .delete(deleteOneById);

// Esta vez lo exportamos por defecto
module.exports = router;
