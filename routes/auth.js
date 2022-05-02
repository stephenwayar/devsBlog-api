const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

//POST routes

router.post('/api/login', AuthController.post_login)

router.post('/api/register', AuthController.post_register)

router.post('/api/forgot_password', AuthController.post_forgot_password)

router.post('/api/reset_password', AuthController.post_reset_password)

//GET routes

router.get('/api/users', AuthController.get_users)

router.get('/api/users/:id', AuthController.get_user)

module.exports = router