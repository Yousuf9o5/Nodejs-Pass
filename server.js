const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("we are live");
  res.render("index", { text1: "world" });
});

app.get("/users", (req, res) => {
  res.json({ text: "testing" });
});

const orderRouter = require("./views/orders");

app.use("/orders", orderRouter);

app.listen(3000);
