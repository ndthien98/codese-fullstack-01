const db = require('../utils/db')

const getAllCategory = async () => {
  const sql = `SELECT * FROM category;`;
  const data = await db.queryMulti(sql);
  return data;
}

const getCategoryById = async (id) => {
  const sql = `
  SELECT *
  FROM category
  WHERE categoryId = ? ;`;
  const data = await db.queryOne(sql, [id])
  return data
}

module.exports = {
  getAllCategory,
  getCategoryById
}

// ham nay viet cho vui 
// const checkuserlogin = (username, password) => {
//    const sql = `SELECT * FROM account WHERE username = ? AND password = ? ;`;
//   const data = await db.queryOne(sql, [username, password])
//   return data
// }