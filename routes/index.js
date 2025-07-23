const { Router } = require('express');
const usersRouter = require('./usersRouter');
const phonesRouter = require('./phonesRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/phones', phonesRouter);


module.exports = router;
