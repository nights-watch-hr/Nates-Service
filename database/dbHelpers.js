const Track = require('./model');

const dbHelpers = {
  getAll: () => {
    return Track.find({});
  },

  getOne: id => {
    return Track.findOne({ id });
  }
};

module.exports = dbHelpers;
