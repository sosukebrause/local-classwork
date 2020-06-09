const fs = require("fs");
const util = require("util");

fs.writeFile("text.txt", "this is a test", function (err) {
  if (err) throw err;
  console.log("Success");
});

const writeFileAsync = util.promisify(fs.writeFile);

writeFileAsync("test2.txt", "This is a promise now")
  .then(() => console.log("success"))
  .catch((err) => console.log(err));

writeFileAsync("test2.txt", "this is a promise now")
  .then(() => console.log("success"))
  .catch((err) => console.log(err));
