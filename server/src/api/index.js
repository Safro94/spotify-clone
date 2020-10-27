require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const songs = require('./routes/songs');
const albums = require('./routes/albums');
const errorHandler = require('../middlewares/errorHandler');
const notFound = require('../middlewares/notFound');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/songs', songs);
app.use('/api/albums', albums);

// Not found
app.use(notFound);

// Error handler
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}`));