// Requrie modules

var express = require("express");
var path = require("path");
var socket = require('socket.io')
var {router} = require('./Routes/routes')

// config

require("dotenv").config();
app = express();

app.enable('trust proxy');

// Middlewares

app.use('/', router)

app.use("/admin", function (req, res) {
  if (req.session.test == "tfestfr") {
    res.sendFile(path.join(__dirname + "/static/examples/dashboard.html"));
  } else {
    res.send("You are not logged in");
  }
});

// Register form

app.post("/register", function (req, res) {
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
