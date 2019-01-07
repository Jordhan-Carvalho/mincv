const express = require('express');
const router = express.Router();
const {postRegister} = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MinCV' });
});

// USERS ROUTE

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.send("Registrar form");
});
/* POST register page. */
router.post('/register', postRegister);

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.send("Login form");
});
/* POST login page. */
router.post('/login', (req, res, next) => {
  res.send("Login Post");
});

/* GET profile page. */
router.get('/profile', (req, res, next) => {
  res.send("profile page");
});

// UPDATE PROFILE

/* PUT profile page. */
router.put('/profile/:user_id', (req, res, next) => {
  res.send("profile update");
});

// FORGOT PASS
router.get('/forgot-pw', (req, res, next) => {
  res.send("forgot page");
});
router.put('/forgot-pw', (req, res, next) => {
  res.send("forgot update");
});

router.get('/reset-pw/:token', (req, res, next) => {
  res.send("reset page");
});
router.put('/reset-pw/:token', (req, res, next) => {
  res.send("reset update");
});


module.exports = router;
