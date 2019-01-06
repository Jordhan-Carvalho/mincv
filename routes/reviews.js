const express = require('express');
const router = express.Router({mergeParams: true});

// GET      /posts/:id/reviews          INDEX list all reviews
router.get('/', (req, res, next) => {
  res.send("connected to /review");
});


// POST     /posts/:id/reviews         CREATE create review
router.post('/', (req, res, next) => {
  res.send("CREATE");
});


// GET      /posts/:id/reviews/:review_id/edit SHOW edit form
router.get('/:review_id/edit', (req, res, next) => {
  res.send("edit form");
});

// PUT      /posts/:id/reviews/:review_id      UPDATE edit review
router.put('/:review_id', (req, res, next) => {
  res.send("EDIT");
});

// DELETE   /posts/:id/reviews/:review_id   DELETE delete reviews
router.delete('/:review_id', (req, res, next) => {
  res.send("DELETE");
});

// RESTful Routes 7

// review     /posts/:id/reviews         CREATE create review
// GET      /posts/:id/reviews/:id      SHOW individual review
// GET      /posts/:id/reviews/:id/edit SHOW edit form
// PUT      /posts/:id/reviews/:id      UPDATE edit review
// DELETE   /posts/:id/reviews/:id   DELETE delete reviews



module.exports = router;