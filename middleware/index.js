const { paginateUser, paginatePhone } = require('./pagination');
const {
  validationUserOnCreat,
  validationUserOnUpdate,
} = require('./validation');

module.exports.validation = require('./validation');

module.exports.pagination = require('./pagination');

// {
//   validation: {
//     validationUserOnCreat, validationUserOnUpdate;
//   }
//   pagination: {
//     paginateUser, paginatePhone;
//   }
// }
