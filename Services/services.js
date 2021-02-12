var {} = require('../Models/models')


var service = {
    user: function(req) {
        User.findOne({}, function(err, res) {
            if (res.email == req.email) {
                authenticated = true
            }
        })
        return true
    }
}

module.exports = {service}