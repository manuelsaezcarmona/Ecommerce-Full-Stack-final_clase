const { model, Schema } = require('mongoose');

const productSchema = Schema({
  brand: String,
  image_url: String,
  description: String,
  price: Number,
  stock: Number
});

// Exportamos el modelo y lo llamamos primero en
module.exports = model('Product', productSchema);
