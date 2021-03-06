const createError = require(`http-errors`);
const errors = require("../utils/errors");
const security = require(`../utils/security`);

const requireLogin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(` `)[1];
    const decodedToken = security.verifyToken(token);
    console.log(decodedToken);
    req.username = decodedToken.username;
    req.role = decodedToken.role;
    next();
  } catch (e) {
    console.log(e);
    next(createError.Unauthorized(`Xác thực thất bại!`)); // 401
  }
};

const requireRole = function(role) {
  const midlleWare = async function(req, res, next) {
    if (req.role === role) {
      next();
    } else {
      next(errors.FORBIDDEN);
    }
  };

  return midlleWare;
};

module.exports = {
  requireLogin,
  requireRole,
};
