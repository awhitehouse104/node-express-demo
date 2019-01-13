const ordersService = require('./orders.service')

class OrdersController {
	get(req, res) {
		res.send(ordersService.getAll())
	}

	getById(req, res) {
		const order = ordersService.getSingle(parseInt(req.params.id, 10))

		if (!order) {
			return res.status(404).send('Order not found')
		}

		res.send(order)
	}
}

module.exports = new OrdersController()
