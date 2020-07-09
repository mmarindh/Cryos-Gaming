//todas las rutas para pagina de web aca

const express = require('express');
const router = express.Router();
const path = require('path');

//Para nuestras rutas debemos considerar lo siguiente:
//Si ustedes quieren mostrar toda la informcaion de lo que deseen: index
//Si desean mostrar el detalle de un producto: show
//Si desean actualizar un producto: edit
//Si desean crear producto: create
//Si desean borrar un producto: delete

//Debo requerir el controlador
const controllersWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersWeb.js'));
//Armo mis rutas


router.get('/', controllersWeb.index);
router.get('/nosotros', controllersWeb.nosotros);
router.get('/contacto', controllersWeb.contacto);
router.get('/productos', controllersWeb.productos);
router.get('/nuevoproducto', controllersWeb.nuevoproducto);
router.get('/carrito', controllersWeb.carrito);
router.get('/producto', controllersWeb.producto);
module.exports = router;