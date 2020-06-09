var inquirer = require(`inquirer`);
var fs = require(`fs`);

inquirer
  .prompt([
    {
      type: "input",
      message: "give some input",
      name: "userInput",
    },
    {
      type: "password",
      message: "enter password",
      name: "pw",
    },
    {
      type: "number",
      message: "how old are you",
      name: "age",
    },
    {
      type: "confirm",
      message: "are you smart",
      name: "confirm",
    },
    {
      type: "list",
      message: "languages",
      name: "stack",
      choices: ["js", "css", "html"],
    },
    {
      type: "checkbox",
      message: "preferred contact",
      name: "contact",
      choices: ["email", "text"],
    },
  ])
  .then(function (response) {
    fs.appendFile(
      "writing.json",
      "\n" + JSON.stringify(response) + "\n",
      function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log("sucess");
        }
      }
    );
  });
// .then(function (response) {
//   fs.writeFile(
//     response.userInput + ".json",
//     JSON.stringify(response),
//     function (error) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("sucess");
//       }
//     }
//   );
// });
// console.log(res.userInput);
// console.log(res.pw);
// console.log(res.age);
// console.log(res.confirm);
// console.log(res.contact);
// console.log(res.stack);

// fs.writeFile(
//   response.userInput + ".json",
//   JSON.stringify(response),
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("success");
//     }
//   }
// );
