// Requires (Librerias que va a tener el proyecto)
var express =  require('express');
var mongoose = require('mongoose');



// Inicializar variables

var app = express();


// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

  if (err) throw err;

  console.log('Base de datos: \x1b[32m%s\x1b[0m',' online');

})


// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

// Eschucar peticiones

app.listen(3000, ()=> {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m',' online');
});