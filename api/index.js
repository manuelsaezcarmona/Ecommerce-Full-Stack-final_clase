/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

//require('dotenv').config();
const { mongoConnect } = require('./config/connect.js');

// Importamos las rutas.
const productRouter = require('./routes/product.routes.js');
const cartRouter = require('./routes/cart.routes.js');

const port = process.env.PORT;
// Ejecutamos el express. No es necesario instanciarlo primero. Se autoejecuta
// que es mi aplicacion de express.
const app = express();
// Conectamos la DB
mongoConnect();

// Midleware
app.use(morgan('dev'));
app.use(express.json());

//Enlazamos las rutas.
app.use('/product', productRouter);
app.use('/cart', cartRouter);

// Levantamos el servidor
// eslint-disable-next-line no-unused-vars
const server = app.listen(port);
