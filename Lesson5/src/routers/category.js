// cách 1
// const express = require('express')
// const Route = express.Router();
// window + R // Run -> dxdiag 
// cách 2
const categoryController = require('../controllers/category');
const { deleteCategoryById } = require('../controllers/category');
const Route = require('express').Router();

Route.get('/', categoryController.getCategoryById);
Route.get('/:id', categoryController.getCategoryById);
Route.post('/', categoryController.createCategory);
Route.put('/:id', categoryController.updateCategoryById);
Route.delete('/:id', deleteCategoryById);

const a = {
  id: 1,
  name: "thien"
};

const { id } = a;

module.exports = Route;