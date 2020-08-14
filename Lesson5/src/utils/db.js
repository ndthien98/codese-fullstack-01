const mysql = require('mysql');
const { param } = require('../routers/category');
const config = {
  host: 'codedidungso.me',
  user: 'root',
  port: 3306,
  password: 'Codese2020',
  database: 'shopese-thien'
}
// BTVN ẩn cái config này bằng .env sử dụng dotenv
const pool = mysql.createPool(config);

const query = (sql,params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })  
}
const queryOne = (sql,params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, result) => {
      if (err) reject(err)
      else resolve(result[0])
    })
  })    
}
const queryMulti = (sql,params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })  
}


module.exports = {
  query,
  queryOne,
  queryMulti
}

// module.exports = pool;




// const sqlInjection = (sql,params) => {
//   const userId = '123; --';
//   const password = '456';
//   const sql = `
//   SELECT *
//   FROM user
//   WHERE userId = ${userId} and password = ${password} `;
//   const sql2 = 
//     `
//   SELECT *
//   FROM user
//   WHERE userId = ? and password = ? `; // java: prepare statement
//   const params = [userId, password]
//   pool.query(sql, params, callback);

//   pool.query(sql, params, callback);
// }
