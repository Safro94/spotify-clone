const AlbumsService = require('../../service/albumsService');

const getAlbums = async (req, res) => {
    const albums = await AlbumsService.get();
    res.json(albums);
};

const getAlbumById = async (req, res) => {
    const { id } = req.params;
    const album = await AlbumsService.getById(id);
    res.json(album);
};

const getAlbumsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    const albums = await AlbumsService.getByCategoryId(categoryId);
    res.json(albums);
};

module.exports = { getAlbums, getAlbumById, getAlbumsByCategory };