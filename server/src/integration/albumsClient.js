const albums = require('./data/albums');
const albumDetails = require('./data/albumDetails');

const get = () => albums;

const getById = (id) => albumDetails;

const getByCategory = (categoryId) => {
  const albumsByCategory = albums.filter((album) => album.id === categoryId);
  if (!albumsByCategory) return [];

  return albumsByCategory.albums;
};

module.exports = {
  get,
  getById,
  getByCategory,
};
