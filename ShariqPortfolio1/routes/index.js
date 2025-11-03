var express = require('express');
var router = express.Router();

/* GET home page. */
// 127.0.0.1 -> (/)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET contact us page. */
router.get('/contactme', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
