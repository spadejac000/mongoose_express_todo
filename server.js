const express = require('express');
const mustacheExpress = require('mustache-Express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5000, () => {
  console.log('Listening on port 5000...');
});