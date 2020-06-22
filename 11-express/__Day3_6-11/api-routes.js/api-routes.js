const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test1", (req, res) => {
  console.log("api has been hit");
  res.json({ mes: "hello from API" });
});
router.get("/api/test2", (req, res) => {
  console.log("api has been hit");
  res.json({ mes: "second example" });
});

module.exports = router;
