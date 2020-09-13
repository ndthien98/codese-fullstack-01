const db = require('../utils/db')
const security = require('../utils/security')

const create = async (newAccount) => {
  const checkExistedSQL = `
    SELECT count(username) as c FROM account WHERE username = ? ;
  `;
  const exist = await db.queryOne(checkExistedSQL, [newAccount.username]);
  if (exist.c > 0) {
    return "Tài khoản đã tồn tại";
  } else {
    const encryptedPassword =
      await security.generatePassword(newAccount.password);
    console.log(encryptedPassword);
    const insertSQL = `
      INSERT INTO account(username, password, role, display) VALUES ( ? , ? , ? , ?) ;
    `;
    await db.query(insertSQL, [
      newAccount.username,
      encryptedPassword,
      newAccount.role,
      newAccount.display
    ]);
    return "Tạo tài khoản thành công!";
  }
}


const getUserByUsername = async (username) => {
  const sql = `
  SELECT username, role, display FROM account WHERE username = ? `
  const result = await db.queryOne(sql, [username]);
  return result;
}

module.exports = {
  create,
  getUserByUsername
}