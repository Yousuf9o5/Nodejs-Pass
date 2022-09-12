const splitOrders = require("./fs folder/fs file");

let finalResult = [];
let newElement = [];
let customerName;
let customerAddress = [];
let ItemCount = 0;
let customerItems = [{}];
let newTotal;
let { n1, n2 } = 0;
let orderItem = [];
let a;

splitOrders.forEach((element) => {
  newElement = element;
  customerName = newElement[0];
  customerAddress = newElement[1].split(" ");
  ItemCount = newElement[3].split(" ");
  a = newElement.length;
  newTotal = newElement[a - 1].split(" ");

  n1 = parseFloat(newTotal[0]);
  n2 = parseFloat(newTotal[1]);
  for (let index = 3; index < [newElement.length - 1]; index++) {
    customerItems = newElement[index].split(" ");
    let Items = {
      name: customerItems[0],
      count: customerItems[1],
      price: customerItems[2],
      total: customerItems[3],
    };
    orderItem.push(Items);
  }

  let discount = n1 - (n1 * n2) / 100;

  let show = {
    customer: customerName,
    address: {
      latitude: Number(customerAddress[0]),
      longitude: Number(customerAddress[1]),
    },
    item: orderItem,
    total: Number(newTotal[0]),
    discount: n2,
    priceAfterDiscount: discount,
  };
  finalResult.push(show);
  orderItem = [];
});

module.exports = finalResult;
