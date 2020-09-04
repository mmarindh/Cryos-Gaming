const path = require('path');
const fs = require('fs');

//const db =  require('../database/models/');
const {Product, Attribute} = require('../database/models/');

//const Product = db.sequelize;
//const Category = db.sequelize;



module.exports = {
    index: function(_req,res){
        const compus = Product.findAll();
        const categorias = Attribute.findAll();
        Promise.all([compus,categorias])
        .then(([compus,categorias]) =>{
         
            res.render(path.resolve(__dirname , '..','views','productos','productos') , {compus,categorias});
        })           
        .catch(error => res.send(error))
    },

    categorias: (req,res) =>{

       const categorias = Attribute.findAll();
       const productos = Product.findAll({
           where: {AttributeId : req.query.categoria},
           include: [{association: 'category'}]
       })
       Promise.all([productos,categorias])
       .then(([productos,categorias]) =>
             res.render(path.resolve(__dirname, '..','views','productos','productos'), {productos,categorias })
       )        
    },

    show: (req,res) => {
        Product
        .findByPk(req.params.id, {
            include: ['category']
        })
        .then(productos =>{
        
            res.render(path.resolve(__dirname, '..','views','productos','detail'), {productos });
        })
    }}
    
