const AlbumsClient = require('../../integration/albumsClient');

const getAlbums = async (req, res) => {
  const albums = await AlbumsClient.get();
  res.json(albums);
};

const getAlbumById = async (req, res) => {
  const { id } = req.params;
  const album = await AlbumsClient.getById(id);
  res.json(album);
};

const getAlbumsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const albums = await AlbumsClient.getByCategoryId(categoryId);
  res.json(albums);
};

module.exports = { getAlbums, getAlbumById, getAlbumsByCategory };
