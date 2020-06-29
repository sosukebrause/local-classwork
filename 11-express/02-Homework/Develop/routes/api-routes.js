const express = require("express");
const router = express.Router();
const store = require("../db/store.js");

router.get("/notes", function (req, res) {
  store
    .getNotes()
    .then((notes) => {
      console.log(notes);
      res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
// router.get("/notes", (req, res) => {
//   store
//     .getNotes()
//     .then((notes) => {
//       console.log(notes);

//       res.json(notes);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

router.get("/api/all", (req, res) => {
  res.json("this came from the server");
});

router.post("/api/test", (req, res) => {
  res.json("this came from the server");
});

const todoArray = [];
router.post("/api/todo", (req, res) => {
  todoArray.push(req.body);
  console.log(todoArray);
  res.json(todoArray);
});
// /api/all

module.exports = router;
