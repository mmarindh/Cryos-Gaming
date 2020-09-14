const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
  check,
  validationResult,
    body
} = require('express-validator');
// !!!! estoy tratando de armar un modificador de usuario !!!!

//Aquí requiero la Base  de Datos.+
const db = require('../database/models');
const { user } = require('./api');
//Aquí hago la asociación al módelo correspondiente
const User = db.User;

module.exports = {
    registro: (req,res) =>{
        res.render(path.resolve(__dirname, '../views/usuarios/registro'));
    },

    create: (req, res) => {
      let errors = validationResult(req);
      if (errors.isEmpty()) {
        let user = {
          username: req.body.username,
          firts_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          avatar: req.file.filename,
          rol: req.body.email.indexOf('@cryosgaming.com') != -1 ? 9 : 1    //Usuario 1 =  9 = Administrador
        }

        User.create(user)
        .then((storedUser) => {
            return  res.redirect('/login');
        })
        .catch(error => console.log(error));
        } else {
        return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
          errors: errors.errors,  old: req.body
        });
      }
    },

    login: function(req,res){
        res.render(path.resolve(__dirname,'..','views','usuarios','login'))
    },
    ingresar: (req,res) =>{
      const errors = validationResult(req);
      //return res.send(errors.mapped());
      if(errors.isEmpty() ){
        let usuarioLogueado = {
          email: req.body.email,
          password: req.body.password
        }
        User.findAll({where:{email: req.body.email}})
        .then (user => {
          req.session.user = user[0]
           if(req.body.recordarme){
          //Crear la cookie de ese usuario
          let mailUsuario = usuarioLogueado.email;
          res.cookie('email', mailUsuario ,{maxAge: 1000 * 60 * 60 * 24})
        }
        res.redirect('/');
        }) 
       
      }else{
        return res.render(path.resolve(__dirname, '../views/usuarios/login'), {
          errors: errors.mapped(),  old: req.body});       
      }

    },
    logout: (req,res) =>{
      req.session.destroy();
      res.cookie('email',null,{maxAge: -1});
      res.redirect('/')
    },

    edit: (req,res) =>{
      //let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
      const userId = req.params.id;
      let userEditar = usuarios.find ( User => usuarios.id == userId);
      res.render(path.resolve(__dirname, '..','views','admin','editUser'), {userEditar});

}}