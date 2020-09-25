const accountService = require(`../services/account`);

const createAccount = async (req, res, next) => {
  const newAccount = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    display: req.body.display,
    email: req.body.email,
    phone: req.body.phone,
    avatar: req.body.avatar,
    address: req.body.address,
    birthday: req.body.birthday,
  };
  if (!newAccount.username) {
    const result = {
      status: 0,
      message: `Không được để trống tài khoản`,
    };
    res.status(400).send(result);
  }
  if (!newAccount.password || newAccount.password.length < 6) {
    const result = {
      status: 0,
      message: `Mật khẩu phải có độ dài lớn hơn 6 ký tự!`,
    };
    res.status(400).send(result);
  }
  const result = await accountService.create(newAccount);
  res.send(result);
};

const getAllAccount = async (req, res, next) => {
  const result = await accountService.getAll(req.pagination);
  res.send(result);
};
const getAccountByUsername = async (req, res, next) => {
  const result = await accountService.getByUsername(req.params.username);
  res.send(result);
};
const updateAccount = async (req, res, next) => {
  const result = await accountService.updateByUsername(
    req.params.username,
    req.body,
  );
  res.send(result);
};
const deleteAccount = async (req, res, next) => {
  const result = await accountService.deleteByUsername(req.params.username);
  res.send(result);
};

module.exports = {
  createAccount,
  getAccountByUsername,
  updateAccount,
  deleteAccount,
  getAllAccount,
};
