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
          firts_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          avatar: req.file.filename,
          rol: 1    //Usuario 1 = Basico 2 = analista   9 = Administrador
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
      if(errors.isEmpty() ) {
        User.findOne({where:{email: req.body.email}})
        .then (user => {
          let userALogear = user;
          userALogear.password = null;
          req.session.user = userALogear
        }) 
        if(req.body.recordarme){
          //Crear la cookie de ese usuario
          res.cookie('email', User.findOne.email,{maxAge: 1000 * 60 * 60 * 24})
        }
        res.redirect('/');
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