// Controller
const categoryService = require('../services/category')

const getAllCategoryId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await categoryService.getAllCategoryId() 
  res.send({
    status: 1,
    data,
    metadata,
  })
}

module.exports = {
  getAllCategoryId
}
