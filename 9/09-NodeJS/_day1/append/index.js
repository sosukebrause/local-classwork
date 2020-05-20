var fs = require("fs");

fs.appendFile("log.txt", process.argv[2] + "\n", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("winning");
  }
});
