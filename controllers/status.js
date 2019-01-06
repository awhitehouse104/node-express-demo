const { name, version } = require('../package')

class StatusController {
	get(req, res) {
		res.send({name, version})
	}
}

module.exports = new StatusController()
