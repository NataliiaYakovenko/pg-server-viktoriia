const { Router } = require('express');
const { userControlers } = require('./../controllers');
const { validation } = require('../middleware');
console.log('userControlers=>>', userControlers);

const usersRouter = Router();

usersRouter
  .route('/')
  .post(validation.validationUserOnCreat, userControlers.createUser)
  .get(userControlers.getAllUsers);

usersRouter
  .route('/:id')
  .get(userControlers.getByIdUser)
  .patch(userControlers.updateByIdUser)
  .delete(userControlers.deleteByIdUser);

module.exports = usersRouter;
