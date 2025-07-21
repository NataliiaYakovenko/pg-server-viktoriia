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

