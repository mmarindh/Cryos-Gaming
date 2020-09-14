//Validator
const {
    check,
    validationResult,
    body
} = require('express-validator');
// Base de datos
const db = require('../../database/models')
const User = db.User 
// encriptador de contraseña 
const bcrypt = require('bcryptjs');

module.exports = [
    check('email').isEmail().withMessage('Agregar un email válido'),
    body('email').custom( (value) =>{
      for (let i = 0; i < users.length; i++) {
          if (users[i].email == value) {
              
            return true    
          }
      }
      return false   
  }).withMessage('El usuario no se encuentra registrado...'),
  check('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  body('password').custom((value, {req}) =>{
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if(bcrypt.compareSync(value,users[i].password)){
          return true
        }else{
          return false
        }
      }
  }
  }).withMessage('Contraseña no coinciden...')
  
  ]

