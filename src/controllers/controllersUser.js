const path = require('path'); 

module.exports = {
    login: function (req, res){
        res.sendFile(path.resolve(__dirname,'..', 'views', 'usuarios', 'login.html'));
    },
    registro: function (req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'usuarios', 'registro.html'));
    }

}