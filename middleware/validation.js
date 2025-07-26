const {
  CREATE_USER_VALIDATION_SCHEMA,
  UPDATE_USER_VALIDATION_SCHEMA,
} = require('../utils/validationSchema');

module.exports.validationUserOnCreat = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_USER_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(422).send('Validation Error');
  }
};

module.exports.validationUserOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await UPDATE_USER_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(422).send('Validation Error');
  }
};
