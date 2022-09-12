const { json: Json } = require("body-parser");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.send(":D");
  console.log("Refreshed");
});

const orderRouter = require("./orders");

app.use("/orders", orderRouter);

app.listen(3000);
