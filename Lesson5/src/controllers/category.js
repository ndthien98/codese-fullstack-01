const categoryService = require('../services/category')

const getAllCategory = async (req, res) => {
  const data = await categoryService.getAllCategory()
  res.send({
    status: 1,
    data
  })
}

const getCategoryById = async (req, res) => {
  const { id } = req.params; // values
  // const id  = req.params.id; // references
  const data = await categoryService.getCategoryById(id)
   res.send({
    status: 1,
    data
  })
}
const createCategory = (req, res) => {
  res.send('create')
}
const updateCategoryById = (req, res) => {
  res.send('update')
}
const deleteCategoryById = (req, res) => {
  res.send('delete')
}

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById
}