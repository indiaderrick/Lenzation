const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  picture: String,
  username: String,
  email: { type: String, unique: true },
  password: String
});

userSchema.virtual('comments', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'comments.user'
});

userSchema.virtual('addedPosts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'addedBy'
});


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
