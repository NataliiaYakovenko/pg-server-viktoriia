const { Router } = require('express');
const usersRouter = require('./usersRouter');

const router = Router();

router.use('/users', usersRouter);

router.post('/phones', () => {});
router.get('/phones', () => {});
router.get('/phones/:id', (req, res) => {});
router.patch('/phones/:id', (req, res) => {});
router.delete('/phones/:id', (req, res) => {});

module.exports = router;
