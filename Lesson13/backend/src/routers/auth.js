// authentication
const R = require('express').Router();
const authController = require('../controllers/auth')
const { requireLogin, requireRole } = require('../middlewares/auth')

R.post('/login', authController.login);
R.get('/', requireLogin, requireRole('ADMIN'), authController.getMe);

module.exports = R;
