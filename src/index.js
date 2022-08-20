const express = require('express');
const path = require('path');

//iniciarlizar express
const app = express();

//configuraciones de
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//ruta para usar archivos estaticos
app.use(express.static(__dirname + 'public'));
app.use('/recursos', express.static(__dirname + '/public'));
console.log(__dirname);
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use(require('./rutas/index'));

//levantar el servidor del
app.listen(app.get('port'), () => {
    console.log('Servidor online', app.get('port'))
});