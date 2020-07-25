const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.static(path.resolve(__dirname, '..','public')));
app.set('view engine','ejs');
const webRoutes = require('./routes/web');
const adminRoutes = require('./routes/admin');
const productoRoutes = require('./routes/producto');
const userRoutes = require('./routes/user');
app.use(webRoutes);
app.use(adminRoutes);
app.use(productoRoutes);
app.use(userRoutes);
//Activar el servidor
app.listen(3000,'localhost',()=> console.log('Servidor corriendo en el puerto 3000'));

