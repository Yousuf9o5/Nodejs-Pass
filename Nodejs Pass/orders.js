const express = require("express");
const finalResult = require("./schema");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200);
  res.send(finalResult);
});

module.exports = router;
