var express = require('express')
var socket = require('socket.io')

var app = express();

app.use(express.static('res'))

var server = app.listen(5000, function() {
    console.log("4000")
})

var io = socket(server)

io.on('connection', function(socket) {
    console.log(server._connectionKey)
    socket.emit("message")
})
