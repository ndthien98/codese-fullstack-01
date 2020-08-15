const express = require('express')
const fs = require('fs') // file system
const rfs = require('rotating-file-stream') // version 2.x
const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

// 1. middlewares ( bodyparser , ... )
// logging
app.use(bodyParser.json())

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

// 2. router
const categoryRouter = require('./routers/category')
app.use('/api/v1/category', categoryRouter);



// 3. listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})