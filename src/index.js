const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.static(path.resolve(__dirname, '..','public')));
app.set('view engine','ejs');
const webRouter = require('./routes/web');
app.use(webRouter);

const userRouter = require('./routes/user');
app.use(userRouter);


//Activar el servidor
app.listen(3000,'localhost',()=> console.log('Servidor corriendo en el puerto 3000'));

