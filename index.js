// Requrie modules

var express = require("express");
var mongoose = require("mongoose");
const {} = require("./scripts/assets");
var bodyParser = require("body-parser");
var path = require("path");
var cookieSession = require("cookie-session");
var socket = require('socket.io')


// config

require("dotenv").config();
app = express();
var u = bodyParser.urlencoded({ extended: true });
app.use(
  cookieSession({
    name: "session",
    keys: ["test"],
    // Cookie Options
    maxAge: 1000, // 24 hours
  })
);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
con = mongoose.connection;

// Middlewares

app.use("/", function(req, res, next) {
    if (req.secure) {
        res.redirect('https://yatfi.herokuapp.com')
	console.log('where am i?')
    }
    else {
        next()
    }
})

app.use("/", express.static(__dirname + '/static/examples/'))

app.use("/assets", router);
app.use("/register", express.static("./static/examples/reg.html"));
app.use("/login", express.static("./static/examples/login.html"));
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
    schema = new mongoose.Schema({
      name: String,
      email: String,
      pwd: String,
    });
    const song = mongoose.model("Alter", schema, "alter");
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

var PORT = process.env.PORT || 80
server = app.listen(PORT, function() {
  console.log(`connected on ${PORT}`)
});

var io = socket(server)

io.on('connection', () => {
  console.log('abe yeh to pape hain');
});
