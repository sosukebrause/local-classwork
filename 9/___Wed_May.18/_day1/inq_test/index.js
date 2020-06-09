var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "give me some input",
      name: "userInput",
    },
    {
      type: "input",
      message: "give more input",
      name: "userInput2",
    },
    {
      type: "password",
      message: "enter password",
      name: "pw",
    },
  ])
  .then(function (response) {
    console.log(response.userInput);
    console.log(response.userInput2);
    console.log(response.pw);
  });
