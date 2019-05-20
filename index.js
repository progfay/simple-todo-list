const express = require('express')
const morgan = require('morgan')
const app = express()
const { NODE_ENV } = process.env
const path = require('path').resolve(__dirname, NODE_ENV === 'production' ? 'dist' : 'static')

app.use(morgan('short'))
app.use(express.static(path))

app.listen(8080, () => console.log('Listening on http://localhost:8080'))
