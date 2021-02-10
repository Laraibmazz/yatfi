var {} = require('../Models/models')

function Find() {
    User.find({}, function(err, res) {
        console.log(res[0])
    })
}

module.exports = {Find}