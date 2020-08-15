const mysql = require('mysql')

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})


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
