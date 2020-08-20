require('dotenv').config()
const security = require('./utils/security')
console.log(process.env.SALT_ROUND);

const token = security.generateToken({
  username: 'hien',
  role: -1
})
console.log(token);

const data = security.verifyToken(token)
console.log(data);

const testFun = async () => {
  await security.generatePassword('123456')
  await security.verifyPassword('x','123456')
}

(() => {
  testFun()
})()
