const path = require('path'); 

module.exports = {
    index: function (req, res){
        //responder con index.html
        res.render(path.resolve(__dirname,'..', 'views', 'web', 'index.ejs'));
    },
    login: function (req, res){
        res.render(path.resolve(__dirname,'..', 'views', 'usuarios', 'login.ejs'));
    },
    registro: function (req,res) {
        res.render(path.resolve(__dirname,'..', 'views', 'usuarios', 'registro.ejs'));
    },
    nuevoproducto: function (req,res) {
        res.render(path.resolve(__dirname,'..','views','productos', 'productAdd.ejs'))
    },
    carrito: function (req,res) {
        res.render(path.resolve(__dirname,'..','views','web', 'cart.ejs'))
    },
    producto: function (req,res) {
        res.render(path.resolve(__dirname,'..','views','productos', 'product.ejs'))
    },
}