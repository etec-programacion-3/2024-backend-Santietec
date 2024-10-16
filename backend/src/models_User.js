const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  myList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  watchHistory: [{
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
    progress: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);