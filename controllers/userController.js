const User = require('../models/user');
const Post = require('../models/post');


function profileRoute(req, res, next) {
  User
    .findById(req.params.userId)
    .populate('addedPosts following')
    .then(user => {
      console.log(user.followers);
      res.render('pages/users', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function follow(req, res, next) {
  // userId is the person whos page we are on
  // currentUserId is the person who is logged in
  User
    .findById(req.params.userId)
    .then(user => {
      console.log('user before push', user);
      user.followers.push(req.params.currentUserId);
      user.save();
      console.log('user after push', user);
      res.redirect(`/pages/${req.params.userId}`);
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = {
  profileRoute: profileRoute,
  follow: follow
};

//function, route, ejs
