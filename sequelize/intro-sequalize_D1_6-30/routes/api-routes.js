const express = require("express");
const router = express.Router();
//Make sure to reference the database like so:
const db = require("../models");

router.get("/all", (req, res) => {
  db.Todo.findAll()
    .then((todos) => res.send(todos))
    .catch((err) => res.send(err));
});

// router.get("/all/:title", (req, res) => {
//   db.Todo.findAll({
//     where: {
//       title: req.body.title,
//     },
//   })
//     .then((filtered) => res.send(filtered))
//     .catch((err) => res.send(err));
// });

router.get("/find/:id", (req, res) => {
  console.log(req.params.id);
  // db.Todo.findAll({
  db.Todo.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((todos) => res.send(todos))
    .catch((err) => res.send(err));
});

router.post("/new", (req, res) => {
  db.Todo.create({
    title: req.body.title,
    text: req.body.text,
  })
    .then((todo) => res.send(todo))
    .catch((err) => res.send(err));
});

router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  })
    //this [below] will not work because there is no object to return, with the callback "destroyed"
    // .then((destroyed) => res.send(destroyed))
    .then((destroyed) => res.send({ msg: req.params.id + "Deleted" }))
    .catch((err) => res.send(err));
});

router.patch("/update", (req, res) => {
  db.Todo.update(
    {
      title: req.body.title,
    },
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then(() => res.send({ msg: "Updated" }))
    .catch((err) => res.send(err));
});

module.exports = router;
