// authentication
const R = require('express').Router();
const authController = require('../controllers/auth')

R.get('/login', authController.login);

module.exports = R