const getAllCategory = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query.id);
  res.send({
    name: 'thien'
  })
}
const getCategoryById = (req, res) => {
  console.log(req.query.id);
  res.send('get one')
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