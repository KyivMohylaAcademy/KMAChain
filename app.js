const express = require('express');
const app = express();

const transcriptsRoutes = require('./api/routes/transcripts');

app.use('/transcripts', transcriptsRoutes);

module.exports = app;