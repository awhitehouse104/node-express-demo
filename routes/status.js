const express = require('express')
const controller = require('../controllers/status')

const router = express.Router()

router.get('/', controller.get)

module.exports = router
