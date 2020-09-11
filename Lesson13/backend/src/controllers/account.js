const accountService = require('../services/account');
const security = require('../utils/security');

const create = async (req, res, next) => {
  const newAccount = {
    username: req.body.username,
    password: req.body.password,
    display: req.body.display,
    role: req.body.role
  }
  console.log('tao moi tai khoan', newAccount);
  if (!newAccount.username) {
    const result = {
      status: 0,
      message: 'Không được để trống tài khoản',
    };
  res.status(400).send(result);
  };
  if (!newAccount.password || newAccount.password.length < 6) {
    const result = {
      status: 0,
      message: 'Mật khẩu phải có độ dài lớn hơn 6 ký tự!',
    };
    res.status(400).send(result);
  };
  // nếu thoả mãn TK MK
  const message = await accountService.create(newAccount);
  res.send({
    status: 1,
    message: message
  });
  
}

module.exports = {
  create
}