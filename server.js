const express = require('express');
const path = require('path');
const logger = require('morgan');
const checkLoggedIn = require('./config/checkLoggedIn');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/cards', checkLoggedIn, require('./routes/api/cards'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`We'll have flying cars in the year ${port}`)
});