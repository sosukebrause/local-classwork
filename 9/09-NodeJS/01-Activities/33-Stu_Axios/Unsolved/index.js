const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username",
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then((res) => {
      console.log(res);
      const repoNames = res.data.map(function (repo) {
        return repo.name;
        // const { username } = inquirer.name;
      });
      console.log(repo.name);
      const repoNamesStr = repoNames.join("\n");
      fs.writeFile("repos.txt", repoNamesStr, (err) => {
        if (err) throw err;
        console.log(`saved ${repoNames.length} repos`);
      });
    });
  });
