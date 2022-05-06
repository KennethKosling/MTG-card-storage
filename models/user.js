const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 4;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
  }]
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret){
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);