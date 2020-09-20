const createError = require(`http-errors`);

module.exports = {
  UNAUTHORIZED: createError.Unauthorized(`Xác thực thất bại!`),
  FORBIDDEN: createError.Forbidden('Không được cấp quyền!'),
  BAD_REQUEST: createError.BadRequest('Yêu cầu không đúng định dạng!'),
}