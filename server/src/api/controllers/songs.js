const SongsService = require('../../service/songsService');

const getSongs = async (req, res) => {
  const songs = await SongsService.get();
  res.json(songs);
};

const getSongById = async (req, res) => {
  const { id } = req.params;
  const song = await SongsService.getById(id);
  res.json(song);
};

module.exports = { getSongs, getSongById };