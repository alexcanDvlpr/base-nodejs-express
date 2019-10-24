'use strict'

function testing(req, res) {

    return res.status(200).send({ message: 'Pong!' });
}

module.exports = {
    testing,
}