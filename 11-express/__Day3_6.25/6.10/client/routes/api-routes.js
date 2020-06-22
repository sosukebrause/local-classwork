const express = require("express");
const router = express.Router();

//basic test

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});
router.get("/api/proof", (req, res) => {
  res.json({ msg: "endpoints so important" });
});

module.exports = router;
