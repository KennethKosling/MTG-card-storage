const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json('You\'re good');
}

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.status(200).json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}



function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET
  );
}