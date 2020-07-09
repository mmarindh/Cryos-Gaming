
const path = require('path'); 

module.exports = {
    index: function (req, res){
        //responder con index.html
        res.sendFile(path.resolve(__dirname,'..', 'views', 'web', 'index.html'));
    },
      nosotros: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'web', 'nosotros.html'));
    },
    contacto: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'web', 'contacto.html'));
    },
    productos: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'web', 'productos.html'));
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