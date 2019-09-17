const express = require('express')

const router = express.Router()

let users = []

router.get('/', (req, res, next) => {
  res.render('form', {
    title: 'Add user'
  })
})

router.post('/', (req, res, next) => {
  users.push(req.body.name)
  res.redirect('/users')
})

router.get('/users', (req, res, next) => {
  res.render('users', {
    users: users,
    title: 'Users'
  })
})

router.use('/delete', (req, res, next) => {
  users = users.filter(name => name !== req.query.user)
  res.redirect('/users')
})
module.exports = router