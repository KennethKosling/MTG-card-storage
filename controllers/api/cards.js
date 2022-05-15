const User = require('../../models/user');
const Card = require('../../models/card');


module.exports = {
  create,
  getCards
};

async function create(req, res) {
  try {
    const card = await Card.create(req.body);
    res.status(200).json();
  } catch (e) {
    res.status(400).json(e);
  }
}

async function getCards(req, res){
  try{
    // console.log(req.user)
    const user = await 
      User.find({_id: req.params.id}).
      populate('cards');
    res.status(200).json(user.cards);
  } catch(e){
    res.status(400).json(e)
  }
}