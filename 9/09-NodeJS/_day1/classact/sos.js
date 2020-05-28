var inquirer = require("inquirer")
var fs = require("fs")

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "order pizza"
  }
])
.then (function (response) {
  console.log(response);
  fs.writeFile(response.name + ".json", JSON.stringify(response), function ())
  
})