'use strict'

var express = require('express');
var TestController = require('../controllers/test');
var AuthController = require('../controllers/auth');

// Middlewares
const Authentication = require('../middleware/auth');


// Devolvemos un objeto con loas rutas
var api = express.Router();


api.get('/ping', Authentication.authMiddleware, TestController.testing);

api.post('/singUp', AuthController.singUp);

module.exports = api;