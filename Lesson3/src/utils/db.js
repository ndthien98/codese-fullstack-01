// import module mysql
const mysql = require('mysql')

// declare config
const config = {
  host: 'codedidungso.me', // ip 
  port: 3306, //default = 3306
  user: 'root',
  password: '123456',
  database: 'shopese'
}

// create pool 
const pool = mysql.createPool(config)

// mysql.createConnection(config)

module.exports = pool