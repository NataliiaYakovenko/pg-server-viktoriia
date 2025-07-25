const { User } = require('./../models');

module.exports.createUser = async (req, res) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    if (!createdUser) {
      return res.status(400).send('Something wrong');
    }
    res.status(201).send(createdUser);
  } catch (err) {
    console.log('err=>>', err);
    res.status(500).send('Server Error');
  }
};

module.exports.getAllUsers = (req, res) => {
  res.send('OK');
};

module.exports.getByIdUser = async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await User.getById(id);

    if (!foundUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(foundUser);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports.updateByIdUser = (req, res) => {};

module.exports.deleteByIdUser = (req, res) => {};
