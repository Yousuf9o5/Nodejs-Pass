const fs = require("fs");
const order1 = fs.readFileSync("./orders/order1.txt", "utf8");
const order2 = fs.readFileSync("./orders/order2.txt", "utf8");
const order3 = fs.readFileSync("./orders/order3.txt", "utf8");

let splitOrders = [
  order1.split("\r\n"),
  order2.split("\r\n"),
  order3.split("\r\n"),
];

module.exports = splitOrders;
