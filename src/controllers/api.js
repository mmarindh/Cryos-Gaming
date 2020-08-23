const {Product,User,Attribute} = require('../database/models/');
module.exports = {
    producto : {
        index : async (req,res) => res.send(await Product.findAll()),
        show : async (req,res) => res.send(await Product.findByPk(req.param.id))

    },
    user : {
        index : async (req,res) => res.send(await User.findAll()),
        show : async (req,res) => res.send(await User.findByPk(req.param.id))
    }

}