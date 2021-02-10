var express = require('express')
var path = require('path')
var login = express()

login.use("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/../static/examples/login.html'))
})

module.exports = {login}