const express = require('express');
const router = express.Router();
const path = require('path');
const controllersAdmin = require('../controllers/controllersAdmin');

const controllersProducto = require(path.resolve(__dirname, '..', 'controllers', 'controllersProducto'));

router.get('/productos', controllersProducto.index);
router.get('/productos', controllersAdmin.edit)


//Requiero el paquete expres-validator
const {
    check,
    validationResult,
    body
} = require('express-validator');

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/compus'));    //Aquí deben indicar donde van a guardar la imagen ,
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })



//Acá busco establecer un que como minimo el nombre del producto necesita 5 carácteres

router.post('/productos', upload.single('image'),[
    check('name').isLength({min: 5}).withMessage('El campo "Nombre de el equipo" debe de tener como mínimo 5 carácteres'),
    check('description').isLength({min: 20}).withMessage('El campo "Descripción" debe de tener como mínimo 20 carácteres'),
    body('image').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('La imagen elegida debe ser un archivo con formato: .JPG ó JPEG ó PNG')
], controllersAdmin.create),

   
module.exports = router