const express = require('express')
const { name, version } = require('./package')
const router = require('./router')
const { errorHandler } = require('./middleware')

const app = express()
const port = process.env.PORT || 3000

app.use('/api', router)

app.use(errorHandler)

app.listen(port, () => console.log(`${name} version ${version} listening on port ${port}`))
