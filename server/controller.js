const dbHelpers = require('../database/dbHelpers');
let trackToPlay = null;
let trackToQueue = null;

const controller = {
  getAll: (req, res) => {
    dbHelpers
      .getAll()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },

  getOnePlay: (req, res) => {
    const id = req.params.id;
    dbHelpers
      .getOne(id)
      .then(data => {
        trackToPlay = data;
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getOneQueue: (req, res) => {
    const id = req.params.id;
    dbHelpers
      .getOne(id)
      .then(data => {
        trackToQueue = data;
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getTrackToPlay: (req, res) => {
    let temp = trackToPlay;
    trackToPlay = null;
    res.status(200).send(temp);
  },

  getTrackToQueue: (req, res) => {
    let temp = trackToQueue;
    trackToQueue = null;
    res.status(200).send(temp);
  }
};

module.exports = controller;
