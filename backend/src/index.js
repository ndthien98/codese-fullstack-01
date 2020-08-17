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
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ',req.query);
  next()
})


// 2. router
const parameterRouter = require('./routers/parameter')
// const categoryRouter = require('./routers/category')
// const productRouter = require('./routers/product')
// const orderRouter = require('./routers/order')
// const accountRouter = require('./routers/account')

app.use('/api/v1/parameter', parameterRouter);
// app.use('/api/v1/category', categoryRouter);
// app.use('/api/v1/product', productRouter);
// app.use('/api/v1/order', orderRouter);
// app.use('/api/v1/account', accountRouter);


const CRUD = require('./middlewares/CRUD')
app.use('/api/v1/category',
  CRUD(
    'category',
    { GET: true, POST: true, PUT: true, DELETE: true },
    'categoryId',
    ['display', 'imageUrl', 'description'],
    'isDelete'
  ));

app.use('/api/v1/product',
  CRUD(
    'product',
    { GET: true, POST: true, PUT: true, DELETE: true },
    'productId',
    ['display', 'provider', 'description', 'imageUrl', 'priceIn', 'priceOut', 'priceSale', 'shipday', 'instock', 'status', 'categoryId'],
    'isDelete'
  )
)
app.use('/api/v1/order',
  CRUD(
    'order',
    { GET: true, POST: true, PUT: true, DELETE: true },
    'orderId',
    ['username', 'productId', 'price', 'amount', 'note', 'status'],
    'isDelete'
  ));

app.use('/api/v1/account',
  CRUD(
    'account',
    { GET: true, POST: true, PUT: true, DELETE: true },
    'username',
    ['password', 'role', 'display', 'email', 'phone', 'address', 'birthday', 'avatar', 'status'],
    'isDelete'
  ));

// 3. listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})
