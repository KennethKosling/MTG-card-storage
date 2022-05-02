const express = require('express');
const path = require('path');
const logger = require('morgan');

require('dotenv').config();
// require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// app.use(require('./config/checkToken'));

// app.use('/users', require('./routes/users'));
// const ensureLoggedIn = require('./config/ensureLoggedIn');
// app.use('/cards', ensureLoggedIn, require('./routes/cards'));
// app.use('/decks', ensureLoggedIn, require('./routes/decks'));


// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const port = process.env.PORT || 3090;

app.listen(port, function() {
  console.log(`We'll have flying cars in the year ${port}`)
});