const authService = require('../services/auth');

const login = async (req, res, next) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  const result = await authService.login(user);
  if (result) {
    res.send({
      status: 1,
      token: result,
    });
  } else {
    next('Đăng nhập thất bại');
  }
};

const getMe = async (req, res, next) => {
  const user = await authService.getMe(req.username);
  res.send(user);
};

module.exports = {
  login,
  getMe,
};
