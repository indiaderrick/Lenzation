const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');
const userController = require('../controllers/userController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

// HOMEPAGE ROUTE:
router.get('/', postController.homeRoute);

// PROFILE ROUTE:
router.get('/pages/:userId', userController.profileRoute);

//GET LIST OF FOLLOWING ROUTE:
router.get('/user/:userId/following', secureRoute, userController.getFollowing);

//ABOUT ROUTE:
router.get('/about', postController.aboutRoute);

//REGISTER ROUTE:
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

// // UPDATE USER ROUTE:
// router.get('/profile/edit',  userController.editProfileRoute)

//EDIT USER ROUTE:
router.get('/users/:userId/edit', secureRoute, userController.editRoute);

// UPDATE USER ROUTE:
router.put('/users/:userId', secureRoute, postController.updateRoute);

// LOGIN ROUTE:
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

//LOGOUT ROUTE:
router.get('/logout', secureRoute, authController.logoutRoute);

// INDEX ROUTE:
router.get('/posts', postController.indexRoute);

//COMMENTS CREATE ROUTE:
router.post('/posts/:postId/comments', secureRoute, commentsController.commentsCreateRoute);

//COMMENTS DELETE ROUTE:
router.delete('/posts/:postId/comments/:commentId', secureRoute, commentsController.deleteRoute);

//NEW ROUTE:
router.get('/posts/new',secureRoute, postController.newRoute);

// CREATE ROUTE:
router.post('/posts', secureRoute, postController.createRoute);

//SHOW ROUTE:
router.get('/posts/:id', postController.showRoute);

// EDIT ROUTE:
router.get('/posts/:id/edit', secureRoute, postController.editRoute);

// UPDATE ROUTE:
router.put('/posts/:id', secureRoute, postController.updateRoute);

//DELETE ROUTE:
router.delete('/posts/:id', secureRoute, postController.deleteRoute);

//FOLLOW ROUTE
router.post('/user/:userId/follow/:currentUserId', secureRoute, userController.follow);

//LIKES ROUTE:
router.post('/posts/:postId/like/:currentUserId', secureRoute, postController.like);


module.exports = router;
