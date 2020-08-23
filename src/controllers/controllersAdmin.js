const path = require('path');
const fs = require('fs');


module.exports = {
    index: (req,res) =>{
        //res.send('Estamos por aqui en el Administrador');
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'administrar.ejs'),{compus});
    },
    create: (req, res) =>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    },
    save: (req,res)=>{
        let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        //let relojesTotales =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','relojes.json')));
        //Esto es una forma medio troglodita de hacer el aumento de los id
        let ultimoProducto = compus.pop();
        compus.push(ultimoProducto);
        //res.send(req.body);
        //console.log(req.body);
        //return res.send(req.file);
        let nuevoProducto={
            id: ultimoProducto.id +1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image : req.file.filename
        };
            //Aquí se agrega al array el nuevo Producto
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
        //let compus =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','listaProductos.json')));
        req.body.id = req.params.id;
        req.body.image = req.file ? req.file.filename : req.body.oldImage;
        let productosUpdate = compus.map(compu => {
            if(compu.id  == req.body.id){
                return compu = req.body;
            }
            return compu;
        });
        let productosActualizar = JSON.stringify(productosUpdate,null,2);
        //Guardar o reemplazar nuestro archivo JSON
        fs.writeFileSync(path.resolve(__dirname,'..','data','listaProductos.json'), productosActualizar);
        res.redirect('/administrar');
    }


}