const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32).required(),
  lastName: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  tel: yup.string().matches(/^\+\d{12}$/, 'Tel must be like +380 XXX XX XX'),
});

module.exports.UPDATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32).required(),
  lastName: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  tel: yup.string().matches(/^\+\d{12}$/, 'Tel must be like +380 XXX XX XX'),
});
