const math = require("./math.js");

var operation = process.argv[2];

var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

switch (operation) {
  case "sum":
    console.log(math.sum(num1, num2));
    break;
  case "difference":
    console.log(math.difference(num1, num2));
    break;
  case "product":
    console.log(math.product(num1, num2));
    break;
  case "quotient":
    console.log(math.quotient(num1, num2));
    break;
  default:
    break;
}
// console.log(num1 + num2);
// console.log(math.sum(5, 7));
