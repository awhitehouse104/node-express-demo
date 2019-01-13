class CustomersController {
	constructor() {
		this.customers = [{id: 1, name: 'John Smith'}, {id: 2, name: 'Jane Smith'}]

		this.get = this.get.bind(this)
		this.getById = this.getById.bind(this)
	}

	get(req, res) {
		res.send(this.customers)
	}

	getById(req, res) {
		const id = parseInt(req.params.id, 10)
		const customer = this.customers.find(c => c.id === id)

		if (!customer) {
			return res.status(404).send('Customer not found')
		}

		res.send(customer)
	}
}

module.exports = new CustomersController()
