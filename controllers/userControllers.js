const { pagination } = require('../middleware');
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

module.exports.getAllUsers = async (req, res) => {
  const { pagination } = req;
  try {
    const foundUsers = await User.getAll(pagination);
    res.status(200).send(foundUsers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
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

module.exports.getUserAllPhones = async (req, res) => {
  const { id } = req.params;
  const { brand, startDate, endDate } = req.query;

  try {
    const foundUser = await User.getUserPhones(id, brand, startDate, endDate );

    if (!foundUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(foundUser);
  } catch (err) {
    console.log('err=>', err);
    res.status(500).send('Server Error');
  }
};

module.exports.updateByIdUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedUser = await User.updateById(id, body);

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(updatedUser);
  } catch (err) {
    console.log('err=>', err);
    res.status(500).send('Server Error');
  }
};

module.exports.deleteByIdUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.deleteById(id);

    if (!deletedUser) {
      res.status(404).send('User not found');
    }
    res.status(200).send(deletedUser);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
