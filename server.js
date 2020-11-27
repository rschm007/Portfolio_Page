// DEPENDENCIES
const express = require("express");

// EXPRESS CONFIGURATION

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// render static files
app.use(express.static('public'));

// start server listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// ** GET ROUTES  - Display Pages
// root route
app.get('/', function (req, res) {
  res.render('public/index.html')
});

// about route
app.get('/about', function (req, res) {
  res.render('public/about.html')
});

// contact route
app.get('/contact', function (req, res) {
  res.render('public/contact.html')
});

// projects route
app.get('/projects', function (req, res) {
  res.render('public/projects.html')
});

// about route
app.get('/about', function (req, res) {
  res.render('public/skills.html')
});