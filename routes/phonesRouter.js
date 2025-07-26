const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { pagination } = require('../middleware');

const phonesRouter = Router();

phonesRouter.get('/', pagination.paginatePhone, phoneControllers.getAllPhones);
// Інші маршрути:
phonesRouter.post('/', (req, res) => {});
phonesRouter.get('/:id', (req, res) => {});
phonesRouter.patch('/:id', (req, res) => {});
phonesRouter.delete('/:id', (req, res) => {});

module.exports = phonesRouter;

