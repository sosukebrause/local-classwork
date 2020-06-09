const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios
  .get("https://icanhazdadjoke.com/", config)
  .then((res) => appendFileAsync("jokes.txt", "\n" + res.data.joke + "\n"))
  .then(() => readFileAsync("jokes.txt", "utf8"))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//RETURN allows you to create a promise chain i.e.: .then.then.then... If => function `return` is implicit

//UTIL: Takes a function following the common error-first callback style, i.e. taking an (err, value) => ... callback as the last argument, and returns a version that returns promises.
