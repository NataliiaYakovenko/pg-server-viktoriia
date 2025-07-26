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
      //console.log('err :>> ', err); // або помилку
      throw new Error(err.detail);
    }
  }
  static async getAll({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM users
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundUsers = await User.pool.query(selectAllQuery);
      return foundUsers.rows;
    } catch (err) {
      //console.log('err :>> ', err);
      throw new Error(err.detail);
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
      //console.log('err :>> ', err);
      throw new Error(err.detail);
    }
  }
  static async updateById(id, { firstName, lastName, email, tel }) {
    try {
      const updateQuery = `
        UPDATE users
        SET first_name = $1, 
            last_name = $2, 
            email = $3, 
            tel = $4
        WHERE id = $5
        RETURNING *
      `;
      const values = [firstName, lastName, email, tel, id];
      const updatedUser = await User.pool.query(updateQuery, values);
      return updatedUser.rows[0];
    } catch (err) {
      // console.log('err :>> ', err);
      throw new Error(err.detail);
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
