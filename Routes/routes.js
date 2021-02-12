var express = require('express')
var path = require('path')
var { register } = require('./register')
var { login } = require('./login')
var { app } = require('./admin')

router = express.Router()

router.use(function (req, res, next) {
    if (req.protocol == 'http' && req.hostname != 'localhost') {
        res.redirect('https://yatfi.herokuapp.com/')
    }
    else {
        next()
    }
})

router.use('/', function(req, res) {
    if (req.session.login == 'login') {
        res.redirect('/admin')
    } else {
        res.sendFile(path.join(__dirname + '/../static/examples/index.html'))
    }
})

router.use("/assets", express.static(__dirname + '/../static/assets/'))

router.use("/register", register)

router.use("/login", login)

router.use("/admin", app)

module.exports = { router }