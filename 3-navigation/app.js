// IMPORTS SECTION
// Node core module to deal with file paths
const path = require('path')

// NPM packages
// The express.js framework
const express = require('express')

// App routes have been segregated into different files
const routes = require('./routes/routes')

// =================
// =================

// Main app object
const app = express()

// All middleware functions

// Serve static files, like CSS and browser JS
app.use(express.static(path.join(__dirname, 'public')))
// Routes file
app.use(routes)
// Fall back to sending a 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// App listens on port 3000
app.listen(3000)
