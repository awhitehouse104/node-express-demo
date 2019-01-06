const express = require('express')
const controller = require('../../../controllers/orders')

const router = express.Router()

router.get('/', controller.get),
router.get('/:id', controller.getById)

module.exports = router
