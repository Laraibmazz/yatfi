var express = require('express')
var {register} = require('./register')
var {login} = require('./login')

router = express.Router()

/* router.use("/", function(req, res, next) {
    if (req.protocol == 'http') {

        res.redirect('https://yatfi.herokuapp.com/')
    }
    else {
        next()
    }
}) */
router.use("/", express.static(__dirname + '/../static/examples/'))

router.use("/assets", express.static(__dirname + '/../static/assets/'))

router.use("/register", register)

router.use("/login", login)

module.exports = {router}