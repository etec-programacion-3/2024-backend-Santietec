const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  genre: [String],
  duration: String,
  rating: String,
  releaseYear: Number,
  thumbnailUrl: String,
  videoUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);