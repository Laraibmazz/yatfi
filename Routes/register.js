var express = require('express')
var path = require('path')
var register = express.Router()

register.route('/')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname + '/../static/examples/reg.html'))
    })
    .post(function(req, res) {
        // Todo: Create register auth
    })

module.exports = {register}
