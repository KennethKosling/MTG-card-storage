const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    mana: [String],
    type: String,
    desc: String,
    abil: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;

// Basic Database to be used for seeding if needed

// const cards = [
//     {name: "Forest", foil: false, mana: 'Green', type: 'Land', desc: '', abil: ''},
//     {name: "Plains", foil: false, mana: 'White', type: 'Land', desc: '', abil: ''},
//     {name: "Mountain", foil: false, mana: 'Red', type: 'Land', desc: '', abil: ''},
//     {name: "Island", foil: false, mana: 'Blue', type: 'Land', desc: '', abil: ''},
//     {name: "Swamp", foil: false, mana: 'Black', type: 'Land', desc: '', abil: ''},
//  ];