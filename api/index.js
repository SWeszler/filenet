const express = require('express')

const app = express()

const files = require('./routes/files')
app.use(files)

module.exports = app
