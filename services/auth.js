'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config').config();
const KEY_SECRET = config.SECRET;


function createToken(user) {
    const payload = {
        sub: user.name,
        iat: moment().unix(),
        exp: moment().add(5, 'days').unix() 
    }

    return jwt.encode(payload, KEY_SECRET);
}

module.exports = {
    createToken,
}