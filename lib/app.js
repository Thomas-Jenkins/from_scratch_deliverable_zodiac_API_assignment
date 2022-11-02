const express = require('express');
const path = require('path');
const app = express();

app.use('/zodiacs', require('./controllers/zodiacs'));
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
