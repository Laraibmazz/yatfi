var {} = require('../Models/models')

var service = {
    user: function() {
        User.find({})
            .then(a => console.log(a[0]))
            .catch(b => console.log('sdf'))
    }
}

service.user()

module.exports = {service}