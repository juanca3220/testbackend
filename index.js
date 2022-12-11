const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const conectarDB = require("./database");
const cors = require('cors')

const app = express();
app.use(cors())

//conectar a la base de datos
conectarDB;

// Settings
app.set('port', config.app.port);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use("/api/auth", require("./routes/auth"));
app.use('/api/clientes', require('./routes/clientes.routes'));
app.use('/api/productos', require('./routes/productos.routes'));


// Starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Servidor iniciado en puerto  ${app.get('port')}`)
});

