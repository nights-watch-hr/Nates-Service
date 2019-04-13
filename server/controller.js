const dbHelpers = require('../database/dbHelpers');

const controller = {
  getAll: (req, res) => {
    dbHelpers
      .getAll()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },

  getOne: (req, res) => {
    const id = req.params.id;
    dbHelpers
      .getOne(id)
      .then(data => (global.songData = data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;
