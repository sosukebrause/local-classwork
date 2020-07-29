const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/tasks", async (req, res) => {
  const allTasks = await db.Task.findAll();
  try {
    res.send(allTasks);
  } catch (err) {
    res.send({ msg: "Error occured" });
  }
});
router.get("/task/:id", (req, res) => {
  db.Task.findOne({
    where: { id: req.params.id },
  })
    .then((res) => res.send(res))
    .catch((err) => res.send(err));
});
router.post("/task/new", (req, res) => {
  db.Task.create({
    text: req.body.text,
    completed: req.body.completed,
  }).then((task) => res.send(task));
});
router.delete("/task/:id", async (req, res) => {
  const getTask = await db.Task.destroy({
    where: { id: req.params.id },
  });
  try {
    res.send({ msg: "deleted success" });
  } catch (err) {
    res.send({ msg: "error" });
  }
});
router.patch("/patch", (req, res) => {
  db.Task.update(
    { completed: req.body.completed },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then(() => res.send({ msg: "success patch" }))
    .catch((err) => res.send(err));
});

router.get("/all", async (req, res) => {
  const allTodos = await db.Todo.findAll();
  try {
    res.send(allTodos);
  } catch (err) {
    // console.log(err);
    res.send({ msg: "Error occurred" });
  }
  // .then((todos) => res.send(todos))
  // .catch((err) => res.send(err));
});

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
    student: req.body.title,
    text: req.body.text,
  })
    .then((task) => res.send(todo))
    .catch((err) => res.send(err));
});

router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((destroyed) => res.send({ msg: req.params.id + "Deleted" }))
    .catch((err) => res.send(err));
});

router.patch("/update", (req, res) => {
  db.Todo.update(
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
