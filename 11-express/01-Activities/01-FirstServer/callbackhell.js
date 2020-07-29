// var photo = downloadPhoto(
//   "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif"
// );

// downloadPhoto(
//   "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif",
//   handlePhoto
// );

// function handlePhoto(error, photo) {
//   if (error) console.error("Download error!", error);
//   else console.log("Download finished", photo);
// }

// console.log("Download started");

var myNumber = 1;
function addOne() {
  myNumber++;
} // define the function
addOne(); // run the function
console.log(myNumber); // logs out 2

var fs = require("fs"); // require is a special function provided by node
var myNumber = undefined; // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile("number.txt", function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents);
    myNumber++;
  });
}

addOne();

console.log(myNumber); // logs out undefined -- this line gets run before readFile is done
