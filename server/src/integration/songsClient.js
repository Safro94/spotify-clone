const albumDetails = require('./data/albumDetails');

const get = () => albumDetails.songs;

const getById = (id) => {
  const songs = albumDetails.songs.filter((song) => song.id === id);
  if (!songs.length) return [];
  return songs[0];
};

module.exports = {
  get,
  getById,
};
