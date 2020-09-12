const fs = require('fs');
const path = require('path');
//let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
        
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.user){
        res.locals.usuario = req.session.user;
       return next();
    }else if(req.cookies.email){
        let usuario = User.find(usuario => usuario.email == req.cookies.email)
        //return res.send(usuario);
      delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }
}