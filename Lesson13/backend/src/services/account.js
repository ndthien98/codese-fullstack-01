const db = require('../utils/db');
const security = require('../utils/security');

const create = async (newAccount) => {
  const checkExistedSQL = `
    SELECT count(username) as c FROM account WHERE username = ? ;
  `;
  const exist = await db.queryOne(checkExistedSQL, [newAccount.username]);
  if (exist.c > 0) {
    return {
      status: 0,
      message: 'Tài khoản đã tồn tại',
    };
  }
  const encryptedPassword = await security.generatePassword(
    newAccount.password,
  );
  console.log(encryptedPassword);
  const insertSQL = `
      INSERT INTO account(
        username, 
        password, 
        role, 
        display,
        email,
        phone,
        avatar,
        address,
        birthday
      ) 
      VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ?) ;
    `;
  await db.query(insertSQL, [
    newAccount.username,
    encryptedPassword,
    newAccount.role,
    newAccount.display,
    newAccount.email,
    newAccount.phone,
    newAccount.avatar,
    newAccount.address,
    newAccount.birthday,
  ]);
  return {
    status: 0,
    message: 'Tạo tài khoản thành công!',
  };
};

const getAll = async (pagination) => {
  const sql = `
  SELECT username, role, display, email, phone, avatar, address, birthday, status
  FROM account
  WHERE isDelete = 0
  LIMIT ?
  OFFSET ?`;
  const result = await db.queryMulti(sql, [
    pagination.limit,
    pagination.offset,
  ]);

  const countSql = `
  SELECT count(username) as total
  FROM account;`;
  const { total } = await db.queryOne(countSql);

  return {
    status: 1,
    metadata: {
      length: result.length,
      total,
    },
    data: result,
  };
};

const getByUsername = async (username) => {
  const sql = `
  SELECT username, role, display, email, phone, avatar, address, birthday, status
  FROM account
  WHERE isDelete = 0 AND username = ?`;
  const result = await db.queryOne(sql, [username]);
  return {
    status: 1,
    data: result,
  };
};
const updateByUsername = async (username, data) => {
  const sql = `
  UPDATE account
  SET
    display = ?, 
    email = ?, 
    phone = ?, 
    avatar = ?, 
    address = ?, 
    birthday = ?
  WHERE username = ? AND isDelete = 0;
  `;
  await db.query(sql, [
    data.display,
    data.email,
    data.phone,
    data.avatar,
    data.address,
    data.birthday,
    username,
  ]);
  return {
    status: 1,
    message: 'Update thành công!',
  };
};
const deleteByUsername = async (username) => {
  const sql = `
  UPDATE account
  SET 
    isDelete = 1
  WHERE username = ?;`;
  db.query(sql, [username]);
  return {
    status: 1,
    message: 'Xoá thành công!',
  };
};

module.exports = {
  create,
  getAll,
  getByUsername,
  updateByUsername,
  deleteByUsername,
};
