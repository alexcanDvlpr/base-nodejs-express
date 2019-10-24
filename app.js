'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carga de rutas
const test_routes = require('./routes');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cabeceras Peticiones HTTP
// Middleware de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Requested-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTION, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTION, DELETE');

    next();
});

// Rutas Base
app.use('/api', test_routes);


module.exports = app;