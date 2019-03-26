const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', routes)

app.listen(5000, () => {
  console.log('Listening on port 5000...');
});