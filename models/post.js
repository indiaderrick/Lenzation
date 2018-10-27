const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username: String,
  image: String,
  caption: String,
  date: Number,
  location: String
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
