const express = require('express')
const { customers, orders } = require('./modules')

const router = express.Router()

router.use('/customers', customers.router)
router.use('/orders', orders.router)

module.exports = router
