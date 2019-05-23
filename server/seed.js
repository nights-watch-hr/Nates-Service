const Track = require('../database/model');
const trackList = require('../data.json');

const seedTracks = () => {
  Track.insertMany(trackList)
    .then(() => {
      console.log('Track list successfully added');
      mongoose.connection.close();
    })
    .catch(err => console.log(err));
};

seedTracks();
