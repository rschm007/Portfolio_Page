// DEPENDENCIES
const express = require("express");

// EXPRESS CONFIGURATION

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 5000;

// render static files
app.use(express.static("public"));

// set view engine
app.set("view engine", "pug");

// ** GET ROUTES  - Display Pages
// root route
app.get("/", function (req, res) {
  res.render("index");
});

// home route
app.get("/home", function (req, res) {
  res.render("home");
});

// about route
app.get("/about", function (req, res) {
  res.render("about");
});

// contact route
app.get("/contact", function (req, res) {
  res.render("contact");
});

// projects route
app.get("/projects", function (req, res) {
  res.render("projects");
});

// about route
app.get("/skills", function (req, res) {
  res.render("skills");
});

// default route
app.get("*", function (req, res) {
  res.render("home");
});

// start server listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});