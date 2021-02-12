var express = require("express");
var path = require('path')
var cookieSession = require('cookie-session')

app = express();

app.use(cookieSession({
    name: 'session',
    httpOnly: false,
    keys: ['login route'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.use("/", function (req, res) {
    if (req.session.login == "login") {
        res.sendFile(path.join(__dirname + "/../static/examples/dashboard.html"));
    } else {
        res.send("You are not logged in");
    }
});

module.exports = {app}