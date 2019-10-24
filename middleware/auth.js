'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config').config();
const KEY_SECRET = config.SECRET;

function authMiddleware(req, res, next) {

    if(!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes Autorizacion' });
    }

    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, KEY_SECRET);

    if(payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'La sesion ha caducado' });
    }

    req.name = payload.sub;
    next();
}

module.exports = {
    authMiddleware,
}