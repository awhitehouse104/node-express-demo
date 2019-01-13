class CustomersService {
  constructor() {
    this.customers = [{id: 1, name: 'John Smith'}, {id: 2, name: 'Jane Smith'}]
  }

  getAll() {
    return this.customers
  }

  getSingle(id) {
    return this.customers.find(c => c.id === id)
  }
}

module.exports = new CustomersService()
