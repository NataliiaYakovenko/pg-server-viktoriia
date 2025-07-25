const { paginateUser } = require('./pagination');
const { validationUserOnCreat } = require('./validation');

module.exports.validation = require('./validation');

module.exports.pagination = require('./pagination');

{
  validation: {
    validationUserOnCreat;
  }
  pagination: {
    paginateUser;
  }
}
