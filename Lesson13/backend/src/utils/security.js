const bcrypt = require('bcrypt')
// npm i bcrypt ( nếu lỗi chạy 'npm i node-gyp' xong rồi chạy npm i bcrypt)

const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const SALT_ROUND = 10
// 1. mã hoá 1 chiều - mã hoá password ở dạng plaintext => lưu vào database
const generatePassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND)
  return hashedPassword;
}

// 2. mã hoá 2 chiều - tạo access_token 
const generateToken = (data) => {
  const token = jwt.sign(
    data,
    JWT_SECRET_KEY,
    {
      expiresIn: 1000 * 60 * 60 * 24
    }
  );
  return token;
}

// 3. xác thực mã hoá 1 chiều 
const verifyPassword = async (password, hashedPassword) => {
  const result =
    await bcrypt.compare(
      password,
      hashedPassword
    );
  return result;
};

// 4. giải mã mã hoá 2 chiều
const verifyToken = token => {
  const data = jwt.verify(token, JWT_SECRET_KEY);
  return data
}

module.exports = {
  generatePassword,
  generateToken,
  verifyPassword,
  verifyToken
}
