//Validator
const {
    check,
    validationResult,
    body
} = require('express-validator');
// Base de datos
const db = require('../../database/models')
const User = db.User 

const path = require('path');

module.exports = [
    check('first_name').isLength({
        min: 2
      }).withMessage('El campo nombre no es válido, recuerde que debe de tener como mínimo 2 carácteres'),
    check('last_name').isLength({min: 2
      }).withMessage('El campo apellido no es válido, recuerde que debe de tener como mínimo 2 carácteres'),
    check('email').isEmail().withMessage('Agregar un email válido'),

    //Aquí incoporé otras validaciones, para que las tengan de guía en sus proyectos

    //Aquí valido si el usuario ya está registrado en nuestro archivo JSON, esta es una forma

    body('email').custom( (value) =>{
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == value) {
                return false    //Si esto se cumple entonces muestra el mensaje de error
            }
        }
        return true   //De no encontrase el email entonces no muestra el mensaje de errror
    }).withMessage('Usuario ya se encuentra registrado...'),

    //Aquí valido el Password   
    check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
    
    //Aquí valido la confimación del password dispuesto por el usuario
    check('confirm_password').isLength({min: 8 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 8 caractéres'),

    //Aquí valido si las contraseñas son iguales o no
    //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
    //El valor { req } corresponde a lo que viene desde el formulario

    body('confirm_password').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    // Si yo retorno un true  no se muestra el error     
        }else{
            return false   // Si retorno un false si se muestra el error
        }    
    }).withMessage('Las contraseñas deben ser iguales'),

    //Aquí obligo a que el usuario seleccione su avatar
    body('avatar').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ]


