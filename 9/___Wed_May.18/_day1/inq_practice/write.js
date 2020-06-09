var fs = require("fs");
input = process.argv[2];
fs.appendFile("sos.json", "\n" + input + "\n", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("append success");
  }
});
fs.readFile("writing.json", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
