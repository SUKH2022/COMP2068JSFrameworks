const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

router.get('/signin', (req, res) => res.render('signin'));
router.post('/signin', authController.signIn);

router.get('/signup', (req, res) => res.render('signup'));
router.post('/signup', authController.signUp);

router.get('/logout', authController.logout);

module.exports = router;
