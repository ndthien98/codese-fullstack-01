// model = định nghĩa, mô hình hoá, và truy xuất dữ liệu và interface
const db = require('../utils/db')

const getAll = async ({ limit, offset }) => {
  const sql = `
  SELECT display, description, imageUrl, categoryId
  FROM category
  WHERE isDelete = 0
  LIMIT ?
  OFFSET ?`
  const data = await db.queryMulti(sql, [limit, offset]);

  const countSql = `
  SELECT count(categoryId) as total
  FROM category;`;
  const { total } = await db.queryOne(countSql);

  return {
    data,
    metadata: {
      length: data.length,
      total
    }
  }
};

const getById = async (id) => {
  const sql = `
  SELECT display, description, imageUrl
  FROM category
  WHERE categoryId = ? AND isDelete = 0
  LIMIT 1;`
  const data = await db.queryOne(sql, [id])
  return {
    data
  }
};

const create = async ({ display, description, imageUrl }) => {
  console.log({ display, description, imageUrl });
  const sql = `
  INSERT INTO category(categoryId,display,description,imageUrl)
  VALUES(uuid(), ?, ?, ?);`
  await db.query(sql, [display, description, imageUrl]);
};

const updateById = async (id, { display, description, imageUrl }) => {
  const sql = `
  UPDATE category
  SET 
    display = ?,
    description = ?,
    imageUrl = ?
  WHERE categoryId = ? AND isDelete = 0;`
  await db.query(sql, [display, description, imageUrl, id])
};

const deleteById = async (id) => {
  const sql = `
  UPDATE category
  SET 
    isDelete = 1
  WHERE categoryId = ?;`
  await db.query(sql, [id]);
};

const getAllId = async () => {
  const sql = `
  SELECT categoryId, display
  FROM category
  WHERE isDelete = 0`
  const data = await db.queryMulti(sql);
  return {
    data,
    metadata: {
      length: data.length,
    }
  }
};


const getProductOfCategory = async ({ limit, offset, categoryId }) => {
  const sql = `
  SELECT productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
  FROM product
  WHERE isDelete = 0 AND categoryId = ? 
  LIMIT ? 
  OFFSET ?;`
  const data = await db.queryMulti(sql, [categoryId, limit, offset]);

  const countSql = `
  SELECT count(productId) as total
  FROM product;`;
  const { total } = await db.queryOne(countSql);

  return {
    data,
    metadata: {
      length: data.length,
      total
    }
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getAllId,
  getProductOfCategory
}
