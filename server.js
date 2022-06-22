const express = require("express")
const axios = require("axios")
const parser = require("body-parser")
const services = require("./services")
const { posts } = require("./endpoints")
const { authenticate } = require("./middlewares")
const app = express()
const port = 3000

app.use(parser.urlencoded({ extended: false }))

app.use(parser.json())
const postsHandlers = posts({ axios: axios })

app.post("/", authenticate, postsHandlers.post)

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app
