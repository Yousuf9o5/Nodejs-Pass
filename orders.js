const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("here is your order");
});

router.get("/orders", (req, res) => {
  res.send("here is orders file");
});

module.exports = router;
