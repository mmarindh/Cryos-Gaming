//todas las rutas para pagina de web aca

const express = require('express');
const router = express.Router();
const path = require('path');

const controllersUser = require(path.resolve(__dirname, '..', 'controllers', 'controllersUser.js'));
//Armo mis rutas
router.get('/login', controllersUser.login);
router.get('/registro', controllersUser.registro);
router.get('/nuevoproducto', controllersUser.nuevoproducto);
router.get('/carrito', controllersUser.carrito);
module.exports = router;