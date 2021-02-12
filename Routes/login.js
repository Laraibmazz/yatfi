var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var controller = require('../Controller/controller')

var login = express.Router()
login.use(bodyParser.urlencoded({ extended: false }))


login.use(cookieSession({
    name: 'session',
    httpOnly: false,
    keys: ['login route'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


login.route('/')
    .post(function (req, res) {
        auth = controller.User.get_data(req.body)
        console.log(auth)

            req.session.login = auth
            res.send(req.session.login)
        // Todo: Create login auth
    })
    .get(function (req, res) {
        if (req.session.login != 'login') {
            console.log(req.session.login)
            res.sendFile(path.join(__dirname + '/../static/examples/login.html'))
        } else {
            res.redirect('/admin')
        }
    })

module.exports = { login }