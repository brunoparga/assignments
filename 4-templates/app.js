// IMPORTS
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/routes')

// BASIC SETTINGS
const app = express()
app.set('view engine', 'pug')

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found', path: '404' })
})

app.listen(3000)
