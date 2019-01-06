const express = require('express')
const statusRouter = require('./routes/status')
const customersRouter = require('./routes/api/v1/customers')
const ordersRouter = require('./routes/api/v1/orders')

class AppRouter {
	registerRoutes(app) {
		// / routes
		const rootRouter = express.Router()

		rootRouter.use('/status', statusRouter)

		app.use('/', rootRouter)

		// /api/v1 routes
		const apiRouter = express.Router()

		apiRouter.use('/customers', customersRouter)
		apiRouter.use('/orders', ordersRouter)

		app.use('/api/v1', apiRouter)
	}
}

module.exports = new AppRouter()
