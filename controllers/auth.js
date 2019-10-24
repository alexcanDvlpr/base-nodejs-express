'use strict'

/**
 * Auth Controller. Login and Registry with JSON Web Token
 */

 const service = require('../services/auth');

function singUp (req, res) {

    const user = {
        name: req.body.name,
        email: req.body.email
    }

    res.status(200).send({token: service.createToken(user)});
}


module.exports = {
    singUp,

}
