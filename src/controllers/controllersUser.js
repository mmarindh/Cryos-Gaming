const path = require('path'); 

module.exports = {
    index: function (req, res){
        //responder con index.html
        res.sendFile(path.resolve(__dirname,'..', 'views', 'web', 'index.html'));
    },
    login: function (req, res){
        res.sendFile(path.resolve(__dirname,'..', 'views', 'usuarios', 'login.html'));
    },
    registro: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'usuarios', 'registro.html'));
    },
    nuevoproducto: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..','views','productos', 'productAdd.html'))
    },
    carrito: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..','views','web', 'cart.html'))
    },
    producto: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..','views','productos', 'product.html'))
    },
}