const R = require(`express`).Router();
const accountController = require(`../controllers/account`);
const { tryCatch } = require(`../middlewares/errorHandle`);
const pagination = require(`../middlewares/pagination`);

R.post(`/`, tryCatch(accountController.createAccount));

R.get(`/`, pagination, tryCatch(accountController.getAllAccount));

R.get(`/:username`, tryCatch(accountController.getAccountByUsername));

R.put(`/:username`, tryCatch(accountController.updateAccount));

R.delete(`/:username`, tryCatch(accountController.deleteAccount));

module.exports = R;
