module.exports.creareUser = (req, res) => {};
const { User } = require('./../models');

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
