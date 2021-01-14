var express = require('express')
var mongoose = require('mongoose')
var fs = require('fs')

b = mongoose.connect("mongodb+srv://rrr:Devel166x6@cluster0.keh3e.gcp.mongodb.net/musster", {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // console.log('we are connected');
})
app = express()





app.set('name', 'alter')
console.log(app.locals.settings.views);

app.use('/', express.static('./static/examples/'))

app.use('/assets', express.static('./static/assets/'))

app.listen(8000)
