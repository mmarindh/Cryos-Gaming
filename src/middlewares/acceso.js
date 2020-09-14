const fs = require('fs');
const path = require('path');
const { user } = require('../controllers/api');
const db = require('../database/models');
const User = db.User;
//let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
        
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.user= false;
    if(req.session.user){
        res.locals.user = req.session.user;
       return next();
    }else if(req.cookies.email){
        let usuario = User.findOne({
            where: {
                email : req.cookies.email
            }
        })
        .then(user => {
            req.session.user = user;
            req.locals.user = user;
            return next();
        })

    }else{
        return next();
    }
}