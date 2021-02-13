var {} = require('../Models/models')


var service = {
    user: function(req) {
        User.find({}, function(err, res) {
            console.log(res);
        })
        return true
    },
    create_user: function(req) {
      User.create()
    }
}

module.exports = {service}
