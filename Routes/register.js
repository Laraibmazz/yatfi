var express = require('express')
var path = require('path')
var register = express.Router()

register.route('/')
    .get(function(req, res) {
        res.send('res.send has been sent')
    })
    .post(function(req, res) {
        // Todo: Create register auth
    })

module.exports = {register}
