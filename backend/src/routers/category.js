const R = require('express').Router();
const categoryController = require('../controllers/category')

R.get('/', categoryController.getAllCategory)
R.get('/:id', categoryController.getCategoryById)
R.post('/', categoryController.createCategory)
R.put('/:id', categoryController.updateCategory)
R.delete('/:id', categoryController.deleteCategory)


module.exports = R