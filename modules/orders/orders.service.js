class OrdersService {
  constructor() {
    this.orders = [{id: 1, customerId: 1, item: 'Dog'}, {id: 2, customerId: 2, item: 'Cat'}]
  }

  getAll() {
    return this.orders
  }

  getSingle(id) {
    return this.orders.find(o => o.id === id)
  }
}

module.exports = new OrdersService()
