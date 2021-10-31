const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors({ origin: { global: true } }));

const postRoutes = require('./routes/post-routes');

app.use(`/api/v1/post`, postRoutes);

module.exports = app;