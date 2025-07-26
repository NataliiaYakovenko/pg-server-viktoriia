const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { pagination } = require('../middleware');
console.log(phoneControllers);

const phonesRouter = Router();

phonesRouter.post('/', (req, res) => {});
phonesRouter.get('/', (req, res) => {});
phonesRouter.get('/:id', (req, res) => {});
phonesRouter.patch('/:id', (req, res) => {});
phonesRouter.delete('/:id', (req, res) => {});

module.exports = phonesRouter;
