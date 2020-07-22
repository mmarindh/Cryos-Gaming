
const path = require('path'); 

module.exports = {
    index: function (req, res){
        //responder con index.html
        res.render(path.resolve(__dirname,'..', 'views', 'web', 'index.ejs'));
    },
      nosotros: function (req,res) {
        res.render(path.resolve(__dirname,'..', 'views', 'web', 'nosotros.ejs'));
    },
    contacto: function (req,res) {
        res.render(path.resolve(__dirname,'..', 'views', 'web', 'contacto.ejs'));
    },
    productos: function (req,res) {
        res.render(path.resolve(__dirname,'..', 'views', 'web', 'productos.ejs'));
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