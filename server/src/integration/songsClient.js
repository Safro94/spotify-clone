const albumDetails = require('./data/albumDetails');

const get = () => albumDetails.songs;

const getById = (id) => albumDetails.songs.filter((song) => song.id === id);

module.exports = {
  get,
  getById,
};
