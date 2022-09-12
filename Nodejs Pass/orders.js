const express = require("express");
const finalResult = require("./schema");
const router = express.Router();
const schema = {
  orders: finalResult,
};
router.get("/", (req, res) => {
  res.status(200);
  res.json(schema);
});

module.exports = router;
