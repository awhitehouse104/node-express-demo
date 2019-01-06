const express = require('express')
const { name, version } = require('./package')
const appRouter = require('./router')
const errorHandler = require('./errorHandler')

const app = express()
const port = process.env.PORT || 3000

appRouter.registerRoutes(app)

app.use(errorHandler)

app.listen(port, () => console.log(`${name} version ${version} listening on port ${port}`))
