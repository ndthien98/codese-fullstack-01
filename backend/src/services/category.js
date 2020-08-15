const db = require('../utils/db')

const getAllCategory = async ({ page, size} = {page: 1, size: 5}) => {
  // 1 2 3 4 5 6 7 8 9 10
  // page 1 2 3 4 5
  // page 5 6 7 8 6
  const sql = `
  SELECT display, description, imageUrl, categoryId
  FROM category
  LIMIT ?
  OFFSET ?`
  const countSql = `
  SELECT count(categoryId) as total
  FROM category;`
  const offset = (page - 1) * size ;
  const data = await db.queryMulti(sql,[size, offset]);
  const {total} = await db.queryOne(countSql);

  return {
    data,
    metadata: {
      length: data.length,
      total
    }
  }
};

const getCategoryById = async (id) => {
  const sql = `
  SELECT display, description, imageUrl
  FROM category
  WHERE categoryId = ?
  LIMIT 1;`
  const result = await db.queryOne(sql, [id])
  return result
};

const createCategory = async ({ display, description, imageUrl }) => {
  console.log({ display, description, imageUrl });  
  const sql = `
  INSERT INTO category(categoryId,display,description,imageUrl)
  VALUES(uuid(), ?, ?, ?);`
  await db.query(sql, [display, description, imageUrl]);
};

// const createCategory = (category) => {
//   const { display, description, imageUrl } = category;
// }

const updateCategoryById = async (id, { display, description, imageUrl }) => {
  const sql = `
  UPDATE category
  SET 
    display = ?,
    description = ?,
    imageUrl = ?
  WHERE categoryId = ?;`
  await db.query(sql, [display, description, imageUrl, id])
};

const deleteCategoryById = async (id) => {
  // ko nen delete han ma chi nen an di thoi 
  const offFK = `SET FOREIGN_KEY_CHECKS = 0;`
  const onFK = `SET FOREIGN_KEY_CHECKS = 1;`
  const sql = `
  DELETE FROM category
  WHERE categoryId = ?;`
  await db.query(offFK)
  await db.query(sql, [id])
  await db.query(onFK)
};

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById
}