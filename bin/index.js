'use strict'

var mongoose = require('mongoose');
var config = require('../config/config').config();
var port = config.server.port || 3000;

var app = require('../app');

mongoose.connect(config.db.URL_DB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log("Base de Datos Funcionando Correctamente");
    app.listen(port, () => {
        console.log(`Servidor arrancado en ${config.server.hostname}:${config.server.port}`);
    });

});