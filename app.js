const express = require('express');
const router = require('./routes/index');

const app = express();

app.use('/api', router);

module.exports = app;

//POST   /api/users {body}
//GET    /api/users?page=1&results=10
//GET    /api/users/1
//PATCH  /api/users/1 {body}
//DELETE /api/users/1

//отримати інформацію про замовлення конкретного користувача
//GET /users/1/orders
//отримати інформацію про КОНКРКТНЕ замовлення конкретного користувача
//GET /users/1/orders/1
