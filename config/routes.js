const postController = require('../controllers/postController');
const router = require('express').Router();

// HOMEPAGE ROUTE:
router.get('/', postController.homeRoute);

//ABOUT ROUTE:
router.get('/about', postController.aboutRoute);

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
