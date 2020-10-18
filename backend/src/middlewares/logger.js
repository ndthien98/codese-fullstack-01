const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const path = require('path')

const printLog = (req, res, next) => {
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  next();
}


var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily log
  path: path.join(__dirname, 'log')
})

const printFile = morgan('combined', { stream: accessLogStream })

module.exports = {
  printLog,
  printFile
}