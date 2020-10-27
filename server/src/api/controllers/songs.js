const SongsClient = require('../../integration/songsClient');

const getSongs = async (req, res) => {
  const songs = await SongsClient.get();
  res.json(songs);
};

const getSongById = async (req, res) => {
  const { id } = req.params;
  const song = await SongsClient.getById(id);
  res.json(song);
};

module.exports = { getSongs, getSongById };
