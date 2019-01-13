const errorHandler = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err)
	}

	console.error(err)

	res.status(500).send('An unknown error has occurred')
}

module.exports = errorHandler
