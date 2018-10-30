const User = require('../models/user');
const Post = require('../models/post');

// function profileRoute(req, res){
//   res.render('pages/profile');
// }

function profileRoute(req, res, next) {
  User
    .findById(req.params.userId)
    .populate('addedPosts')
    .then(user => {
      console.log(user.comments);
      res.render('pages/users', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  profileRoute: profileRoute
};

//function, route, ejs
