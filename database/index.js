const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/airbnbeats', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', () => {
  console.log('Successfully connected to DB');
});

module.exports = db;
