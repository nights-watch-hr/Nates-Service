const dbHelpers = require('../database/dbHelpers');

const controller = {
  getAll: (req, res) => {
    dbHelpers
      .getAll()
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },

  getOne: (req, res) => {
    const _id = req.params;
    dbHelpers
      .getOne(_id)
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  }
};

module.exports = controller;
