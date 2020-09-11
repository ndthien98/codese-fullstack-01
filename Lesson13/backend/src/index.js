require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// before middleware
app.use(bodyParser.json())

// controllers
const accountRouter = require('./routers/account')
const authRouter = require('./routers/auth')
app.use('/api/account', accountRouter)
app.use('/api/auth',authRouter)

// after middlewares
const log = (req, res, next) => {
  console.log('==========================')
  console.log('req.originalUrl\t', req.originalUrl);
  console.log('req.query\t', req.query);
  console.log('req.body\t', req.body);
  console.log('req.params\t', req.params);
  next();
}
app.use(log);
app.listen(9999, (err) => {
  if (err) console.log('err', err);
  console.log('API running at 9999');
})

// đăng ký - C (CRUD) account
// đăng nhập - login
// đăng xuất - logout
// change password
// 