const R = require('express').Router();
const accountController = require('../controllers/account');

R.post('/', accountController.create);

module.exports = R