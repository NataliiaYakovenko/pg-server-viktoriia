const express = require('express');

const app = express();

const router = express.Router();

app.use('/api', router);

// app.post('/api/users', () => {});
// app.get('/api/users', () => {});
// app.get('/api/users/:id', (req, res) => {});
// app.patch('/api/users/:id', (req, res) => {});
// app.delete('/api/users/:id', (req, res) => {});

// app.post('/api/phones', () => {});
// app.get('/api/phones', () => {});
// app.get('/api/phones/:id', (req, res) => {});
// app.patch('/api/phones/:id', (req, res) => {});
// app.delete('/api/phones/:id', (req, res) => {});

router.post('/users', () => {});
router.get('/users', () => {});
router.get('/users/:id', (req, res) => {});
router.patch('/users/:id', (req, res) => {});
router.delete('/users/:id', (req, res) => {});

router.post('/phones', () => {});
router.get('/phones', () => {});
router.get('/phones/:id', (req, res) => {});
router.patch('/phones/:id', (req, res) => {});
router.delete('/phones/:id', (req, res) => {});

module.exports = app;

//POST   /users {body}
//GET    /users?page=1&results=10
//GET    /users/1
//PATCH  /users/1 {body}
//DELETE /users/1

//отримати інформацію про замовлення конкретного користувача
//GET /users/1/orders
//отримати інформацію про КОНКРКТНЕ замовлення конкретного користувача
//GET /users/1/orders/1
