const authService = require(`../services/auth`);
const errors = require("../utils/errors");

const login = async (req, res, next) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  const result = await authService.login(user);
  if (result) {
    res.send({
      status: 1,
      token: result.token,
      refreshToken: result.refreshToken
    });
  } else {
    next(`Đăng nhập thất bại`);
  }
};

const getMe = async (req, res, next) => {
  const user = await authService.getMe(req.username);
  res.send(user);
};
const changePassword = async (req, res, next) => {
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const rePassword = req.body.rePassword;
  if (newPassword !== rePassword) {
    next('Nhập lại mật khẩu cho trùng nhau đi');
  } else {
    const result = await authService.changePassword(req.username, oldPassword, newPassword);
    if (result) {
      res.send({
        status: 1,
        message: 'Đổi mật khẩu thành công'
      })
    } else {
      res.send({
        status: 0,
        message: 'Đổi mật khẩu thất bại'
      })
    }
  }

}

const refreshToken = async (req, res, next) => {
  const oldRefreshToken = req.body.refreshToken
  const oldToken = req.body.token
  const result = await authService.refreshToken({
    oldRefreshToken, oldToken
  })
  if (result) res.send(result);
  else next(errors.UNAUTHORIZED)
}

module.exports = {
  login,
  getMe,
  changePassword,
  refreshToken
};
