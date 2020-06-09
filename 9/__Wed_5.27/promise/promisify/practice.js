const fs = require("fs");
const util = require("util");
fs.writeFile("practice.text", "This is a test", function (err) {
  if (err) throw err;
  console.log("success");
});

const writeFileAsync = util.promisify(fs.writeFile);
writeFileAsync("test2.txt", "this is a promise now")
  .then(() => console.log("success"))
  .catch((err) => console.log(err));
