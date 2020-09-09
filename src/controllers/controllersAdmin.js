const path = require('path');
const fs = require('fs');


module.exports = {
    index: (req,res) =>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'administrar.ejs'),{compus});
    },
    create: (req, res) =>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    },
    save: (req,res)=>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        let ultimoProducto = compus.pop();
        compus.push(ultimoProducto);
        let nuevoProducto={
            id: ultimoProducto.id +1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image : req.file.filename
        };
            compus.push(nuevoProducto);
            //Convertir mi array en un string
            let nuevoProductoGuardar = JSON.stringify(compus,null,2)
            //Guardar o reemplazar nuestro archivo JSON
            fs.writeFileSync(path.resolve(__dirname,'..','data','listaProductos.json'), nuevoProductoGuardar);
            res.redirect('/administrar');
    },
    show: (req,res)=>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        //res.send(req.params.id);
        let compu = 
        compus.filter(compu => {
           if(compu.id == req.params.id){
               return compu;  
            }
        });
        res.render(path.resolve(__dirname, '..','views','admin','detail'), {productos: compu[0]})
    
    },
    destroy: (req,res) =>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        const productDeleteId = req.params.id; 
        const productFinal = compus.filter(compu => compu.id != productDeleteId);
        let productGuardar = JSON.stringify(productFinal,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','listaProductos.json'), productGuardar);
        res.redirect('/administrar');
    },
    edit: (req,res) =>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        const productId = req.params.id;
        let productEditar = compus.find(compu => compu.id == productId);
        res.render(path.resolve(__dirname, '..','views','admin','edit'), {productEditar});
    },
    update: (req,res) =>{
        let compu = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        req.body.id = req.params.id;
        req.body.image = req.file.filename ? req.file.filename : req.body.oldImage;
        let productosUpdate = compu.map(compu => {
            if(compu.id  == req.body.id){
                return compu = req.body;
            }
            return compu;
        });
        let productosActualizar = JSON.stringify(productosUpdate,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','listaProductos.json'), {productosActualizar});
        res.redirect('/administrar');
    }


}