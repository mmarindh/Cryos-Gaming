const path = require('path');
const fs = require('fs');

let productos =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));

module.exports = {
    index: function(req,res){
        //res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productos.html'));
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'),{productos});
    }
}