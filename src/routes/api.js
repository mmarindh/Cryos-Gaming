const express = require('express');
const router = express.Router();
const path = require('path');
const controllerApi = require ("../controllers/api")


router.get('/productos', controllerApi.producto.index);
router.get('/producto/:id', controllerApi.producto.show);




module.exports = router


