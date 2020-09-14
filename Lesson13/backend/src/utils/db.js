const mysql = require('mysql')

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

const logMySQLQuerry = (sql, params) => {
  console.log('sql: ',
    mysql.format(sql, params)
      .replace(/\r?\n|\r/g, ' ')
      .split(' ').filter(e => e !== '').join(' '));
}

const query = (sql, params) => {
  logMySQLQuerry(sql,params)
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })  
}

const queryOne = (sql, params) => {
  logMySQLQuerry(sql,params)
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, result) => {
      if (err) reject(err)
      else resolve(result[0])
    })
  })    
}

const queryMulti = (sql, params) => {
  logMySQLQuerry(sql,params)
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
