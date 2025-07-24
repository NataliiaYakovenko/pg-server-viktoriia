const { Pool } = require('pg');
const User = require('./users');
const Phone = require('./phones');

const connecrionOptions = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'phones_sales',
};

const pool = new Pool(connecrionOptions);

process.on('beforeExit', () => pool.end());

User.pool = pool;

module.exports = { User, Phone };
