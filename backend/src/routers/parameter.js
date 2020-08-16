// Router
const R = require('express').Router();
const parameterController = require('../controllers/parameter')

R.get('/list-category-id',
  parameterController.getAllCategoryId);

module.exports = R;
