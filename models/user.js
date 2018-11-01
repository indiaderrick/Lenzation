const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  picture: String,
  username: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  followers: [ { type: mongoose.Schema.ObjectId, ref: 'User' }]
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

userSchema.virtual('numberOfFollowers')
  .get(function() {
    return this.followers.length;
  });

// userSchema.virtual('numberOfLikes')
//   .get(function() {
//     return this.like.length;
//   });

userSchema.virtual('following', {
  ref: 'User',
  localField: '_id',
  foreignField: 'followers'
});

userSchema.set('toJSON', {
  virtuals: true
});


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
