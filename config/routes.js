const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const router = require('express').Router();

// HOMEPAGE ROUTE:
router.get('/', postController.homeRoute);

//ABOUT ROUTE:
router.get('/about', postController.aboutRoute);

//REGISTER ROUTE:
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

// LOGIN ROUTE:
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

//LOGOUT ROUTE:
router.get('/logout', authController.logoutRoute);

// INDEX ROUTE:
router.get('/posts', postController.indexRoute);

//NEW ROUTE:
router.get('/posts/new', postController.newRoute);

// CREATE ROUTE:
router.post('/posts', postController.createRoute);

//SHOW ROUTE:
router.get('/posts/:id', postController.showRoute);

// EDIT ROUTE:
router.get('/posts/:id/edit', postController.editRoute);

// UPDATE ROUTE:
router.put('/posts/:id', postController.updateRoute);

//DELETE ROUTE:
router.delete('/posts/:id', postController.deleteRoute);


module.exports = router;
