const User = require('../models/user');
const Post = require('../models/post');

function profileRoute(req, res){
  res.render('pages/profile');
}
// function editProfileRoute(res, req){
//   res.render('auth/updateProfile');
// }

module.exports = {
  profileRoute: profileRoute
  // editProfileRoute: editProfileRoute
};
