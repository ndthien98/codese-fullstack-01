const R = require('express').Router();
const productController = require('../controllers/product')

R.get('/', productController.getAllProduct)
R.get('/:id', productController.getProductById)
R.post('/', productController.createProduct)
R.put('/:id', productController.updateProduct)
R.delete('/:id', productController.deleteProduct)

module.exports = R