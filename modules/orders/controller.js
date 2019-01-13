class OrdersController {
	constructor() {
		this.orders = [{id: 1, customerId: 1, item: 'Dog'}, {id: 2, customerId: 2, item: 'Cat'}]

		this.get = this.get.bind(this)
		this.getById = this.getById.bind(this)
	}

	get(req, res) {
		res.send(this.orders)
	}

	getById(req, res) {
		const id = parseInt(req.params.id, 10)
		const order = this.orders.find(o => o.id === id)

		if (!order) {
			return res.status(404).send('Order not found')
		}

		res.send(order)
	}
}

module.exports = new OrdersController()
