const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const cors = require('cors')

const pagination = require('./middlewares/pagination')
const { errorHandle, pageNotFound } = require('./middlewares/errorHandle')

const app = express()

// 1. config app
app.use(bodyParser.json());
app.use(cors(
  {
    origin: '*',
    'Access-Control-Expose-Headers': 'Content-Range',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
  }
));

var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily log
  path: path.join(__dirname, 'log')
})
app.use(morgan('combined', { stream: accessLogStream }))
app.use(pagination)
app.use((req, res, next) => {
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  next();
})

// 2. router
const parameterRouter = require('./routers/parameter')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
const accountRouter = require('./routers/account')
const authRouter = require('./routers/auth')

app.use('/api/v1/parameter', parameterRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/account', accountRouter);
app.use('/api/v1/auth', authRouter);

// 3. error handle middleware
app.use(errorHandle);
app.use('*', pageNotFound);

// 4. listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})
