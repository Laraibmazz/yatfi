var express = require('express')
router = express.Router()

router.use('/', express.static('./static/assets'))

module.exports = {router}