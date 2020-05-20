var inquirer = require("inquirer");
var fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
    },
    {
      type: "checkbox",
      name: "stack",
      message: "What Languages do you know?",
      choices: ["JavaScript", "CSS", "HTML", "Mysql"],
    },
    {
      type: "list",
      name: "contact",
      message: "What is the best way to reach you???",
      choices: ["linkedin", "email", "phone"],
    },
  ])
  .then(function (response) {
    console.log(response);
    fs.writeFile(response.name + ".json", JSON.stringify(response), function (
      error
    ) {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    });
  });
