const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  picture: String,
  username: String,
  email: { type: String, unique: true },
  password: String
});

// const virtual = userSchema.virtual('comments',{
//   ref: 'Post',
//   localField: 'id',
//   foreignField: 'comments.username'
// });


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
