const Post = require('../models/post');

function commentsCreateRoute(req, res) {
  Post.findById(req.params.postId)
    // .populate('comments.username')
    .then(post => {
      post.comments.push(req.body);
      post.save().then(() => res.redirect(`/posts/${post.id}`));
    });
}
function deleteRoute(req, res) {
  Post.findById(req.params.postId)
    .then(post => {
      post.comments.id(req.params.commentId).remove();
      post.save().then(() => res.redirect(`/posts/${req.params.postId}`))
    });
}

module.exports = {
  commentsCreateRoute: commentsCreateRoute,
  deleteRoute: deleteRoute
};
