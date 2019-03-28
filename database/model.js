const mongoose = require('mongoose');
const db = require('./index');

const trackSchema = mongoose.Schema({
  id: { type: Number, allowNull: false, unique: true },
  title: { type: String, allowNull: false },
  version: { type: String, allowNull: false },
  artist: { type: String, allowNull: false },
  remixers: { type: String, allowNull: true },
  genre: { type: String, allowNull: false },
  label: { type: String, allowNull: false },
  released: { type: String, allowNull: false },
  key: { type: String, allowNull: false },
  bpm: { type: Number, allowNull: false },
  length: { type: Number, allowNull: false },
  price: { type: Number, allowNull: false }
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
