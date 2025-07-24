const { Router } = require('express');
const { userControlers } = require('./../controllers');
console.log('userControlers=>>', userControlers);

const usersRouter = Router();

usersRouter
  .route('/')
  .post(userControlers.creareUser)
  .get(userControlers.getAllUsers);

usersRouter
  .route('/:id')
  .get(userControlers.getByIdUser)
  .patch(userControlers.updateByIdUser)
  .delete(userControlers.deleteByIdUser);

module.exports = usersRouter;
