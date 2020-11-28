// DEPENDENCIES
const express = require("express");

// EXPRESS CONFIGURATION

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// render static files
app.use(express.static("public"));

// set view engine
app.set("view engine", "pug");

// start server listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

// ** GET ROUTES  - Display Pages
// root route
app.get("/", function (req, res) {
  res.render("public/index");
});

// about route
app.get("/about", function (req, res) {
  res.render("public/about");
});

// contact route
app.get("/contact", function (req, res) {
  res.render("public/contact");
});

// projects route
app.get("/projects", function (req, res) {
  res.render("public/projects");
});

// about route
app.get("/skills", function (req, res) {
  res.render("public/skills");
});
