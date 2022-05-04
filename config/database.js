const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Ooh how many cards do they have? I know ${db.name} has ${db.port} on ${db.host}!')
});

module.exports = mongoose;