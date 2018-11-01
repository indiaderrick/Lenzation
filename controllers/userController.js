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

function editRoute(req, res){
  User
    .findById(req.params.userId)
    .then(user => {
      res.render('auth/updateProfile', user);
    });
}

function updateRoute(req, res){
  User
    .findByIdAndUpdate(req.params.userId, req.body)
    .then(user => {
      res.redirect(`/users/${user._id}`)
    });
}

function follow(req, res, next) {
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

function getFollowing(req, res){
  User.
    findById(req.params.userId)
    .populate('following followers')
    .then(user => {
      console.log('-=-=->', user);
      res.render('pages/following', user);
    });
}


module.exports = {
  profileRoute: profileRoute,
  follow: follow,
  getFollowing: getFollowing,
  editRoute: editRoute,
  updateRoute: updateRoute
};
