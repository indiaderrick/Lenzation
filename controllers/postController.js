const Post = require('../models/post');

function homeRoute(req, res) {
  res.render('pages/home');
}

function aboutRoute(req, res) {
  res.render('pages/about');
}

function indexRoute (req, res) {
  Post
    .find()
    .populate('addedBy comments.user')
    .then(function(result){
      console.log(result);
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
  Post
    .create(req.body)
    .then(result => res.redirect(`/posts/${result._id}`));
}

function showRoute(req, res) {
  Post
    .findById(req.params.id)
    .populate('comments.user addedBy')
    .then(post => {
      console.log(post);
      res.render('posts/show', post);
    });
}

function editRoute(req, res) {
  Post
    .findById(req.params.id)
    .then(post => {
      res.render('posts/edit', post);
    });
}

function updateRoute(req, res) {
  Post
    .findByIdAndUpdate(req.params.id, req.body)
    .then(post => {
      res.redirect(`/posts/${post._id}`);
    });
}

function deleteRoute(req, res) {
  Post
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/posts'));
}

function like(req, res, next) {
  console.log('we are in like!');
  Post
    .findById(req.params.postId)
    .then(post => {
      post.like.push(req.params.currentUserId);
      post.save();
      console.log(post);
      res.redirect('/posts');
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = {
  homeRoute: homeRoute,
  aboutRoute: aboutRoute,
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  newRoute: newRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute,
  like: like
};
