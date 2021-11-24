const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      amount: { type: Number, required: true }
    }
  ]
});

// Ojo lo que defino es el tipo del objeto. amount se puede definir tambien de esta manera: amount: {type: Number}
// Ojo el tipo producto lo defino como un objeto , que referencia a la "tabla" product
// mongoose necesita que cuando crees un tipo con referencia las propiedades se deben de llamar type y ref
// Esta ref referencia al MODELO
module.exports = model('Cart', cartSchema);
