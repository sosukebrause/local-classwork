var fs = require("fs");

fs.readFile("writing.json", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  } else console.log(data);
});
fs.readFile("do-over.json", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
