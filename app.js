const express = require('express')
const connection = require('./src/config/db')

const app = express()
app.use()
app.listen(8080, () => {
    console.log('connect to 8080')
})

module.exports = app