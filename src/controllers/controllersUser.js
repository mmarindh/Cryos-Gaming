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

//Aquí requiero la Base  de Datos.
const db = require('../database/models/');
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
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          avatar:  req.file ? req.file.filename : '',
          rol_id: 1    //Usuario 1 = Basico 2 = analista   9 = Administrador
        }
        User
        .create(user)
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
        let archivoUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
        let usuarioLogueado = archivoUsers.find(usuario =>usuario.email == req.body.email)
        //Borrar de lo que llega del formulario lo que deseen
       
        //Por seguridad todo data critico lo pueden borrar
        delete usuarioLogueado.password;

        //Aquí voy a guardar en session al usuario
        req.session.usuario = usuarioLogueado;
        if(req.body.recordarme){
          //Crear la cookie de ese usuario
          res.cookie('email', usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
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
      let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','usuarios.json')));
      const userId = req.params.id;
      let userEditar = usuarios.find(usuarios => usuarios.id == userId);
      res.render(path.resolve(__dirname, '..','views','admin','editUser'), {userEditar});

}}