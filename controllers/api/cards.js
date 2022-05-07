const User = require('../../models/user');

module.exports = {
  create,
  getCards
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(200).json();
  } catch (e) {
    res.status(400).json(e);
  }
}

async function getCards(req, res){
  try{
    const user = await 
      User.findById(req.params.id).
      populate('cards').
      exec((err, cards) => {
        if (err) return handleError(err);
        console.log(cards);
      });
    console.log(user)
  } catch(e){
    res.status(400).json(e)
  }
}