var fs = require("fs"); // require is a special function provided by node
var myNumber = undefined; // we don't know what the number is yet since it is stored in a file

function addOne(plusOne) {
  fs.readFile("number.txt", function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents);
    myNumber++;
    plusOne();
  });
}.then((addTen)=>{console.log(myNumber)
})
function addTen(cb) {
  fs.readFile("number.txt", function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents);
    myNumber++;
    cb();
  });
}
function logMyNumber() {
  myNumber++
  console.log(myNumber);
}
addTen(logMyNumber);
