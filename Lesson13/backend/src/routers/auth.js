// authentication
const R = require('express').Router();
const authController = require('../controllers/auth')
const { requireLogin, requireRole } = require('../middlewares/auth')

R.get('/', requireLogin, authController.getMe);
R.post('/login', authController.login);

module.exports = R;
