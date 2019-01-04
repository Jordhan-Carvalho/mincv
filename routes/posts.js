const express = require('express');
const router = express.Router();

// GET      /posts          INDEX list all posts
router.get('/', (req, res, next) => {
  res.send("connected to /post");
});

// GET      /posts/new      NEW create form
router.get('/new', (req, res, next) => {
  res.send("GET      /posts/new      NEW create form");
});

// POST     /posts         CREATE create post
router.post('/', (req, res, next) => {
  res.send("CREATE");
});

// GET      /posts/:id      SHOW individual post
router.get('/:id', (req, res, next) => {
  res.send("show individual");
});

// GET      /posts/:id/edit SHOW edit form
router.get('/:id/edit', (req, res, next) => {
  res.send("edit form");
});

// PUT      /posts/:id      UPDATE edit post
router.put('/:id', (req, res, next) => {
  res.send("EDIT");
});

// DELETE   /posts/:id   DELETE delete posts
router.delete('/:id', (req, res, next) => {
  res.send("DELETE");
});

// RESTful Routes 7

// POST     /posts         CREATE create post
// GET      /posts/:id      SHOW individual post
// GET      /posts/:id/edit SHOW edit form
// PUT      /posts/:id      UPDATE edit post
// DELETE   /posts/:id   DELETE delete posts



module.exports = router;