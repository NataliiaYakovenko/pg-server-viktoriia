const { Pool } = require('pg');

const connecrionOptions = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'phones_sales',
};

const pool = new Pool(connecrionOptions);

process.on('beforeExit', () => pool.end());
// promise  than/catch
pool
  .query('SELECT CURRENT_DATE')
  .then((response) => console.log('1', response.rows[0]))
  .catch((err) => console.log(err));

//callback
pool.query('SELECT CURRENT_DATE', (err, res) => {
  if (!err) {
    console.log('2', res.rows[0]);
  }
});

//promise  async/awayt
(async function () {
  try {
    const res = await pool.query('SELECT CURRENT_DATE');
    console.log('3', res.rows[0]);
  } catch (err) {
    console.log(err);
  }
})();

// pool
//   .query('SELECT * FROM users')
//   .then((response) => console.log(response.rows))
//   .catch((err) => console.log(err));

//отримати користувача з id=1
const id = 1;
(async () => {
  try {
    const res = await pool.query(
      `SELECT *
       FROM users
       WHERE id = ${id}`
    );
    console.log(res.rows[0]);
  } catch (err) {
    console.log(err);
  }
})();

(async () => {
  try {
    const res = await pool.query(
      `SELECT *
       FROM users
       WHERE id = $1`,
      [id]
    );
    console.log(res.rows[0]);
  } catch (err) {
    console.log(err);
  }
})();

const fn = 'Petro2';
const ln = 'Petrenko2';
(async () => {
  try {
    const res = await pool.query(
      `SELECT *
       FROM users
       WHERE first_name = $1 AND last_name = $2`,
      [fn, ln]
    );
    console.log(res.rows);
  } catch (err) {
    console.log(err);
  }
})();

//створити замовлення користувачу з id 1
const user_id = 1;
const created_at = '2023-05-03';
(async () => {
  try {
    const order = await pool.query(
      `INSERT INTO orders (user_id, created_at)
      VALUES ($1, $2)
      RETURNING *
      `,
      [user_id, created_at]
    );
    console.log(order.rows);
  } catch (err) {
    console.log(err);
  }
})();
//=========================================================================

// POST /customers {}
// GET /customers?page=1&results=5
// GET /customers/1
// PATCH /customers/1 {}
// DELETE /customers/1

class User {
  static async create({ firstName, lastName, email, tel }) {
    try {
      //сформувати запит
      const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
      RETURNING *
      `;
      //виконати запит
      const createdUser = await pool.query(insertQuery);
      //повернути результат
      return createdUser.rows[0];
      //або повертається помилка
    } catch (err) {
      console.log(err);
    }
  }

  static getAll({ limit, offset }) {}
  static getById(id) {}
  static ubdateById(id, { firstName, lastName, email, tel }) {}
  static deleteById(id) {}
}

const newUser = {
  firstName: 'Nataliia',
  lastName: 'Yakovenko',
  email: 'yakovenko@gmail.com',
  tel: '+380662865132',
};

const createdUser = User.create(newUser).then((data) => console.log(data));
