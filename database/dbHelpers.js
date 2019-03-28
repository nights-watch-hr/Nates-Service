const Track = require('./model');

const dbHelpers = {
  getAll: () => {
    return Track.find({});
  },

  getOne: id => {
    return Track.findById({ id });
  }
};

module.exports = dbHelpers;
