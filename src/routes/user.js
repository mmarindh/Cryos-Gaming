const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');

//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está registrando existe o no
const fs = require('fs');

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

//Requiero el paquete expres-validator
const {
    check,
    validationResult,
    body
} = require('express-validator');

//Requerir el modulo de los controladores
const controllersUser = require(path.resolve(__dirname, '..', 'controllers', 'controllersUser'));

//Aquí aperturo mi archivo de usuarios, ya que al registrarse un usuario es conveniente buscar que no exista una ya registrado con el mismo email o id o el campo que utlicen para identificar al usuario.

let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')))


//Aquí le incoporé lo referido a la carga de la imagen

//Aquí dispongo la información del storage para tratamiento de guardado imagenes
//https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/usuarios'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })


// Métodos en nuestros controladores: index - show - edit - delete - update - logout
//Aquí disppongo mis rutas



router.get('/registro', controllersUser.registro);
router.get('/editarusuario', controllersUser.edit)




//Aqui en esta ruta envio al controlador el avatar del usuario así como las respectivas validaciones

router.post('/registro', upload.single('avatar'), controllersUser.create);

//login
router.get('/login', controllersUser.login);
router.post('/login',controllersUser.ingresar);

  //Esta es la ruta que se activa al momento que el usuario desea salir de la página
  router.get('/logout', controllersUser.logout);
module.exports = router;