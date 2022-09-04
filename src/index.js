const express = require('express');// se requiere el framework de express
const app = express(); //Se guarda el constante de express en la variable app
const morgan = require('morgan');

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//entiende los datos que vienen de inputs
app.use(express.json());//le permite a mi formato express recibir los formatos json

//routes
app.use(require('./routes/index'));
app.use('/api/registro',require('./routes/registro'));

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port $ {app.get("port")}');
});