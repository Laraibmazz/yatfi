var express = require('express')
var path = require('path')
var login = express.Router()

login.route('/')
    .post(function (req, res) {
        res.send('akflj')
        // Todo: Create login auth
    })
    .get(function (req, res) {
        res.sendFile(path.join(__dirname + '/../static/examples/login.html'))
    })

module.exports = { login }