require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errorHandle, pageNotFound } = require('./middlewares/errorHandle');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  }),
);
app.use(cors());

// routers definitions
const accountRouter = require('./routers/account');
const authRouter = require('./routers/auth');

app.use('/api/v1/account', accountRouter);
app.use('/api/v1/auth', authRouter);
// end of routers definitions

// print request information to screen
app.use((req, res, next) => {
  console.log('==========================');
  console.log('req.originalUrl\t', req.originalUrl);
  console.log('req.query\t', req.query);
  console.log('req.params\t', req.params);
  console.log('req.body\t', req.body);
  next();
});

// handle error
app.use(errorHandle);
app.use('*', pageNotFound);

// start API
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) console.log('err', err);
  console.log(`API running at port ${PORT}`);
});
