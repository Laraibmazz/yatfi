// Requrie modules

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieSession = require("cookie-session");
var socket = require('socket.io')
var {router} = require('./Routes/routes')

// TODO: it should be nothing more but server

// config

require("dotenv").config();
app = express();

app.enable('trust proxy');

var u = bodyParser.urlencoded({ extended: true });
app.use(
  cookieSession({
    name: "session",
    keys: ["test"],
    // Cookie Options
    maxAge: 1000, // 24 hours
  })
);

// Middlewares

app.use('/', router)

app.use("/admin", function (req, res) {
  if (req.session.test == "tfestfr") {
    res.sendFile(path.join(__dirname + "/static/examples/dashboard.html"));
  } else {
    res.send("You are not logged in");
  }
});

// Login form

app.post("/login", u, function (req, res) {
  var em = req.body.email;
  var pwd = req.body.pwd;
  con.once("open", function () {
    song.find({ email: em }, function (err, db) {
      if (err) return err;
      if (db[0].email == em && db[0].pwd == pwd) {
        req.session.test = "tfestfr";
        res.redirect("/admin");
      }
    });
  });
});

// Register form

app.post("/register", u, function (req, res) {
  res.send(req.body);
});

// Listen to Port

var PORT = process.env.PORT || 443
server = app.listen(PORT, function() {
  console.log(`connected on ${PORT}`)
});
var io = socket(server)

io.on('connection', () => {
  console.log('abe yeh to pape hain');
});
