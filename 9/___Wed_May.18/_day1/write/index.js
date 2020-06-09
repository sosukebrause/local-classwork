var fs = require("fs");
var userInput = process.argv[2];
console.log(userInput);
fs.writeFile("log.txt", "hello world", function (error) {
  if (error) {
    return console.log(error);
  }
  console.log("file saved");
});
