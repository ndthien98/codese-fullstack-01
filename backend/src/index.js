// để lên đầu tiên
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
// const rfs = require('rotating-file-stream') // version 2.x
// xoá
const path = require('path')
const bodyParser = require('body-parser')
// const morgan = require('morgan')

const pagination = require('./middlewares/pagination')
const app = express()

// 1. middlewares ( bodyparser , ... )
app.use(bodyParser.json())
// var accessLogStream = rfs.createStream('access.log', {
//   interval: '1d', // rotate daily
//   path: path.join(__dirname, 'log')
// })
// muốn log cả ra console thì dùng thêm winston hoặc viết thêm 1 cái morgan nữa 
// app.use(morgan('combined', { stream: accessLogStream }))

app.use(pagination)

app.use((req, res, next) => {
  console.log('paging',req.pagination);
  next()
})

const middleware = (req, res, next) => {
  console.log(Date());
  next();
}

// 2. router
const categoryRouter = require('./routers/category')
const parameterRouter = require('./routers/parameter')
const productRouter = require('./routers/product')

// app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/parameter', parameterRouter);
app.use('/api/v1/product', productRouter);

const CRUD = require('./middlewares/CRUD')
app.use('/api/v1/category',
  CRUD(
    'category',
    { GET: true, POST: true, PUT: true, DELETE: true },
    'categoryId',
    ['display', 'imageUrl', 'categoryId'],
    'isDelete'
  ));

app.use('/api/v1/order',
  CRUD(
    'order',
    { GET: true, POST: true, PUT: true, DELETE: true },
    'orderId',
    ['username', 'productId', 'price'],
    'isDelete'
  ));

app.use(middleware)

// 3. listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})
