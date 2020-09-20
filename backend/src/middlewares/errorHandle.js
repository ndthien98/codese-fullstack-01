const errors = require("../utils/errors");

const tryCatch = (f) => async (req, res, next) => {
  try {
    await f(req, res, next);
  } catch (error) {
    next(error)
  }
}

const pageNotFound = (req, res, next) => {
  res.status(404).send({
    message: 'Đường dẫn không tồn tại!',
    originalUrl: req.originalUrl
  })
}

const errorHandle = (err, req, res, next) => {
  console.log(err);
  console.log(typeof (err));

  if (typeof (err) === 'string') {
    res.status(400)
    res.send({ message: err })
  } else if (err.status < 500 && err.status > 399) {
    res.status(err.status)
    res.send(err.message)
  } else {
    res.status(errors.BAD_REQUEST.status)
    res.send(errors.BAD_REQUEST.message)
  }
}

module.exports = {
  errorHandle,
  tryCatch,
  pageNotFound
}
