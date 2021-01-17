var express = require('express')
var mongoose = require('mongoose')
const { router } = require('./scripts/assets')
require('dotenv').config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
con = mongoose.connection

con.once('open', function() {
  schema = new mongoose.Schema({
    name: String  
  })
  const song = mongoose.model('Alter', schema, 'alter')
  song.find({Activated: true}, function(err, res) {
    console.log(res);
  })
})

app = express()

app.use('/', express.static('./static/examples/'))

app.use('/assets', router)

app.use('/test', function(req,res) {
  res.send('heelo')
})

app.listen(8000)
