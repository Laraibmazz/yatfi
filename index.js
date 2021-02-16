// Requrie modules

var express = require("express");
const { Mongoose } = require("mongoose");
var socket = require('socket.io')
var {router} = require('./Routes/routes')
app = express();

app.enable('trust proxy');

// Middlewares

app.use('/', function(req, res) {
  res.send('world')
})



// Listen to Port

var PORT = process.env.PORT || 80
server = app.listen(PORT, function() {
  console.log(`connected on ${PORT}`)
});
var io = socket(server)

io.on('connection', () => {
  console.log('abe yeh to pape hain');
});
