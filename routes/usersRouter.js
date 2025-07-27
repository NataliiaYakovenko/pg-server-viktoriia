const { Router } = require('express');
const { userControllers } = require('./../controllers');
const { validation, pagination } = require('../middleware');
console.log('userControllers=>>', userControllers);

const usersRouter = Router();

usersRouter
  .route('/')
  .post(validation.validationUserOnCreat, userControllers.createUser)
  .get(pagination.paginateUser, userControllers.getAllUsers);

usersRouter
  .route('/:id')
  .get(userControllers.getByIdUser)
  .patch(validation.validationUserOnUpdate, userControllers.updateByIdUser)
  .delete(userControllers.deleteByIdUser);

usersRouter
  .route('/:id/phones')
  .get(userControllers.getUserAllPhones);

module.exports = usersRouter;
