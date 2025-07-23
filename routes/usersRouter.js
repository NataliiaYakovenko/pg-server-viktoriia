const { Router } = require('express');

const usersRouter = Router();

usersRouter
  .route('/')
  .post((req, res) => {})
  .get((req, res) => {});

usersRouter
  .route('/:id')
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});


module.exports = usersRouter;
