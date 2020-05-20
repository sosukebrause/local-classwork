var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "what is your name",
      name: "userInput",
    },
    {
      type: "input",
      message: "what languages you know",
      name: "userInput2",
    },
    {
      type: "input",
      message: "what is preferred methond of communication",
      name: "userInput3",
    },
  ])
  .then(function (res) {
    console.log(res.userInput);
    console.log(res.userInput2);
    console.log(res.userInput3);
    fs.writeFile(
      "userInput.json",
      `${res.userInput}, ${res.userInput2}, ${res.userInput3}`,
      function (error) {
        if (error) {
          return console.log(error);
        } else {
          console.log("filesaved!");
        }
      }
    );
  });
