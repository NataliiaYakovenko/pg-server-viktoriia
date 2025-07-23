const { Router } = require('express');

const phonesRouter = Router();

phonesRouter.post('/', () => {});
phonesRouter.get('/', () => {});
phonesRouter.get('/:id', (req, res) => {});
phonesRouter.patch('/:id', (req, res) => {});
phonesRouter.delete('/:id', (req, res) => {});

module.exports = phonesRouter;
