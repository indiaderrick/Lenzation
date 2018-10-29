const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  //change username to mongoose.Schema.ObjectId --> username will therefore be a mongoose ID!
  //go to post controller --> in create route:
  username: String,
  image: String,
  caption: String,
  time: { type: Date, default: Date.now },
  like: String,
  location: String,
  comments: [{
    content: String,
    username: String
  }
  ]
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
