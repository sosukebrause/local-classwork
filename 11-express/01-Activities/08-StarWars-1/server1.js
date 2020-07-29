// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// =========================================================== objects in key value pairs
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200,
};

var obiwan = {
  name: "obiwan",
  role: "jedi",
  age: 60,
  forcePoints: 500,
};
//

// Routes
// ===========================================================
app.get("/", function (req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function (req, res) {
  res.send(yoda);
});

app.get("/darthmaul", function (req, res) {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
