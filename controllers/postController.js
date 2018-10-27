const Post = require('../models/post');

function homeRoute(req, res) {
  res.render('pages/home');
}

function aboutRoute(req, res) {
  res.render('pages/about');
}

function indexRoute (req, res) {
  Post.find()
    .then(function(result){
      const postObject = {
        posts: result
      };
      res.render('posts/index', postObject);
    });
}
function newRoute(req, res) {
  res.render('posts/new');
}

function createRoute(req, res) {
  Post.create(req.body)
    .then(result => res.redirect(`/posts/${result._id}`));
}

function showRoute(req, res) {
  Post.findById(req.params.id)
    .then(post => {
      res.render('posts/show', post)
    })
}
// function editRoute(req, res) {
//
// }
// function updateRoute(req, res) {
//
// }
// function deleteRoute(req, res) {
//
// }


module.exports = {
  homeRoute: homeRoute,
  aboutRoute: aboutRoute,
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  newRoute: newRoute
};
