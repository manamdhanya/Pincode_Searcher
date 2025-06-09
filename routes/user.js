
const express = require('express')
const { handleSignup, handleLogin, handleLogout} = require('../controllers/user')
const {loginPage, signupPage, HomePage} = require('../controllers/pages')
const {Details} = require('../controllers/Details')
const {restrictTologgedUser} = require('../middleware/auth')
const router = express.Router()

router.get('/', loginPage)

router.post('/', handleSignup)

router.get('/signup', signupPage)

router.post('/signup', handleSignup)

router.post('/login', handleLogin)

router.get('/HomePage',restrictTologgedUser, HomePage)

router.get('/HomePage/:place', Details)

router.get('/logout', handleLogout)

module.exports = router