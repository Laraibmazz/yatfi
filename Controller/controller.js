const {service} = require('../Services/services')

var User = {
    get_data: function() {
        a = service.user()
        console.log(a)
    }
}

User.get_data()

module.exports = {User}