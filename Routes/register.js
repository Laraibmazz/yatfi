var express = require('express')
var path = require('path')
var register = express()

register.use("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/../static/examples/reg.html'))
})

module.exports = {register}