/* eslint-disable no-undef */
const mongoose = require('mongoose');
require('dotenv').config();
// Creamos o la funcion de la conexion y puede ser una clase.

async function mongoConnect() {
  const user = process.env.DB_USER;
  const passw = process.env.DB_PASSWD;
  let databaseName = process.env.DB_NAME;
  console.log(user, passw, databaseName);
  const uri = `mongodb+srv://${user}:${passw}@manucluster0.xmenl.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
  // Para realizar la conexion
  const mongooseConnect = await mongoose.connect(uri, () => {
    console.log(`conectado a Base de datos: ${databaseName}`);
  });
  return mongooseConnect;
}

module.exports = { mongoConnect };
