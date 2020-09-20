// authentication
const R = require(`express`).Router();
const authController = require(`../controllers/auth`);
const { requireLogin, requireRole } = require(`../middlewares/auth`);
const { tryCatch } = require(`../middlewares/errorHandle`);

R.get(`/`,
  requireLogin,
  tryCatch(authController.getMe)
);
R.post(`/login`,
  tryCatch(authController.login)
);
R.post(`/change-password`,
  requireLogin,
  tryCatch(authController.changePassword)
);
R.post(`/refresh-token`,
  tryCatch(authController.refreshToken)
);

module.exports = R;
