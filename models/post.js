const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  //change username to mongoose.Schema.ObjectId --> username will therefore be a mongoose ID!
  //go to post controller --> in create route:
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: String,
  caption: String,
  time: { type: Date, default: Date.now },
  like: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  location: String,
  comments: [{
    content: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }
  ]
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
// {type: mongoose.Schema.ObjectId, ref: 'User'}
