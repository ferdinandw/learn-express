const express = require('express')
const router = express.Router()
const Contact = require('../controller/Contact')

router.post('/contact', Contact.create)

module.exports = router