const express = require('express');
const { getAll } = require('../controllers/product.controller');
const router = express.Router();

// Otra manera de traerte router
/*const { Router } = require('express');
 const router = new Router();
 */

router.get('/', getAll);
//router.post('/, .controller')
module.exports = router;
