class User {
  static async create({ firstName, lastName, email, tel }) {
    try {
      // сформувати запит
      const insertQuery = `
        INSERT INTO users (first_name, last_name, email, tel)
        VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
        RETURNING *
      `;
      const createdUser = await User.pool.query(insertQuery); // виконати його
      return createdUser.rows[0]; // повернути результат
    } catch (err) {
      console.log('err :>> ', err); // або помилку
    }
  }
  static async getAll({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM users
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundUsers = await User.pool.query(selectAllQuery);
      return foundUsers.rows;
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async getById(id) {
    try {
      const selectQuery = `
        SELECT *
        FROM users
        WHERE id = ${id}
      `;
      const foundUser = await User.pool.query(selectQuery);
      return foundUser.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async updateById(id, { firstName, lastName, email, tel }) {
    try {
      const updateQuery = `
        UPDATE users
        SET first_name = ${firstName}, 
            last_name = ${lastName}, 
            email = ${email}, 
            tel = ${tel}
        WHERE id = ${id}
        RETURNING *
      `;
      const updatedUser = await User.pool.query(updateQuery);
      return updatedUser.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async deleteById(id) {
    try {
      const deleteQuery = `
        DELETE
        FROM users
        WHERE id = ${id}
        RETURNING *
      `;
      const deletedUser = await User.pool.query(deleteQuery);
      return deletedUser.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
}

module.exports = User;
