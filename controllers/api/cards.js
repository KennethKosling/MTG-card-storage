const User = require('../../models/user');
const Card = require('../../models/card');


module.exports = {
  create,
  getCards
};

async function create(req, res) {
  try {
    const card = await Card.create(req.body);
    const user = await User.findById(req.user._id)
    user.cards.push(card._id)
    user.save()
    res.status(200).json(card);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function getCards(req, res){
  try{
    const user = await 
      User.find({_id: req.params.id}).
      populate('cards');
    res.status(200).json(user[0].cards);
  } catch(e){
    res.status(400).json(e)
  }
}