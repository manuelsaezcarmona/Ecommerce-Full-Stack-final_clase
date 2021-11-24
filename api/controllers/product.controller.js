const Product = require('../models/product.model');

async function getAll({ query }, res) {
  // En este metodo recoge una query que nos llega a traves de query strings
  // y podemos filtrar los resultados.
  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = { getAll };
