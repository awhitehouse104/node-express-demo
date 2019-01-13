const customersService = require('./customers.service')

class CustomersController {
	get(req, res) {
		res.send(customersService.getAll())
	}

	getById(req, res) {
		const customer = customersService.getSingle(parseInt(req.params.id, 10))

		if (!customer) {
			return res.status(404).send('Customer not found')
		}

		res.send(customer)
	}
}

module.exports = new CustomersController()
