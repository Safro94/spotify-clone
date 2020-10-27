const express = require('express');
const asyncHandler = require('express-async-handler');
const { getAlbums, getAlbumById, getAlbumsByCategory } = require('../controllers/albums');

const router = express.Router();

router.get('/', asyncHandler(getAlbums));
router.get('/:id', asyncHandler(getAlbumById));
router.get('/:categoryId', asyncHandler(getAlbumsByCategory));

module.exports = router;