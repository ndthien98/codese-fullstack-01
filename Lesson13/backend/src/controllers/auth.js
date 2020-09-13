const authService = require('../services/auth')
const accountService = require('../services/account')

const login = async (req, res, next) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }

  const result = await authService.login(user);
  if (result) {
     res.send({
      status: 1,
      token: result
    })
  } else {
    res.status(400).send({
      status: 0,
      message: 'Đăng nhập thất bại!'
    })
  }
};

const getMe = async (req, res, next) => {
  const user = await accountService.getUserByUsername(req.username);
  res.send(user);
}

module.exports = {
  login,
  getMe
};
