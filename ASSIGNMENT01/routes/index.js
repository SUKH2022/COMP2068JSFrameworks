// Require the express module
var express = require('express');

// Create an Express router instance
var router = express.Router();

// Define a route handler for the homepage ('/') using GET method
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Export the router object to be used in the main application file
module.exports = router;
