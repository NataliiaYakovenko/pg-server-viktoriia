const { pagination } = require('../middleware');
const { Phone } = require('./../models/phones');

module.exports.getAllPhones = async (req, res) => {
  const { pagination } = req;
  try {
    const foundPhones = await Phone.getAll(pagination);
    res.status(200).send(foundPhones);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};