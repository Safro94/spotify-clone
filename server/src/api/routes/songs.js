const express = require('express');
const asyncHandler = require('express-async-handler');
const { getSongs, getSongById } = require('../controllers/songs');

const router = express.Router();

router.get('/', asyncHandler(getSongs));
router.get('/:id', asyncHandler(getSongById));

module.exports = router;