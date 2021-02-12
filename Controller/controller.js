const {service} = require('../Services/services')
var express = require('express')

var User = {
    get_data: function(req) {
        b = service.user(req)
        console.log('sfkjasfdhkjsadfkjsakdfhk'+ b)
        if (b == true) {
            return 'login'
        }
    }
}

module.exports = {User}