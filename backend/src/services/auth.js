const db = require(`../utils/db`);
const security = require(`../utils/security`);
const uuid = require('uuid');
const redisClient = require('../utils/redis');

const generateNewRefreshToken = async (token) => {
  const refreshToken = uuid.v4()
  redisClient.setAsync(`prefix:${refreshToken}${token}`, JSON.stringify(security.verifyToken(token)), 'ex', 86400 * 90)
  return refreshToken
}

const login = async user => {
  const getUserSQL = `
    SELECT username, password, role FROM account WHERE username = ? ;
  `;
  const result = await db.queryOne(getUserSQL, [user.username]);
  if (!result) return false;
  const compare = await security.verifyPassword(user.password, result.password);
  if (compare) {
    const token = security.generateToken({
      username: result.username,
      role: result.role,
    });
    const refreshToken = await generateNewRefreshToken(token);
    return {
      token,
      refreshToken
    };
  }
  return false;
};

const getMe = async username => {
  const sql = `
  SELECT username, role, display, email, phone, avatar, address, birthday, status
  FROM account WHERE username = ? AND isDelete = 0;
  `;
  const result = await db.queryOne(sql, [username]);
  return result;
};

const changePassword = async (username, oldPassword, newPassword) => {
  const sql = `
  SELECT username, password
  FROM account WHERE username = ? AND isDelete = 0;
  `
  const result = await db.queryOne(sql, [username]);
  console.log(result);
  const compare = await security.verifyPassword(oldPassword, result.password);
  if (compare) {
    const sqlChangePassword = `
    UPDATE account 
    SET password = ?
    WHERE username = ? AND isDelete = 0;
    `
    const newHashPassword = await security.generatePassword(newPassword);
    const result = await db.query(sqlChangePassword, [newHashPassword, username])
    return result;
  } else {
    return false;
  }
}
const refreshToken = async ({ oldRefreshToken, oldToken }) => {
  const datastring = await redisClient.getAsync(`prefix:${oldRefreshToken}${oldToken}`)
  if (datastring) {
    const data = JSON.parse(datastring)
    const newToken = security.generateToken(data)
    const newRefreshToken = await generateNewRefreshToken(newToken)
    Promise.all([
      redisClient.setAsync(`prefix:${newRefreshToken}`, newToken, 'ex', 86400 * 90),
      redisClient.delAsync(`prefix:${oldRefreshToken}${oldToken}`)
    ])
    return {
      token: newToken,
      refreshToken: newRefreshToken
    }
  } else return false
}
module.exports = {
  login,
  getMe,
  changePassword,
  refreshToken
};
