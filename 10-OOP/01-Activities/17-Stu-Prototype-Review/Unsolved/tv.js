const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function () {};

// Find a tv show actor

// Find a tv show
TV.prototype.findShow = function (show) {
  const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  axios.get(URL).then(function (response) {
    const showData = [
      "Show: " + response.data.name,
      "Genre(s): " + response.data.genres.join(", "),
      "Rating: " + response.data.rating.average,
      "Network: " + response.data.network.name,
      "Summary: " + response.data.summary,
      "-".repeat(60),
    ].join("\n\n");
    console.log(response.data);

    fs.appendFile("log.txt", showData, (err) => {
      if (err) throw err;

      console.log(showData);
    });
  });
};
TV.prototype.findActor = function (actor) {
  const URL = "http://api.tvmaze.com/search/people?q=" + actor;
  axios.get(URL).then((res) => {
    const actorData = [
      "name: " + res.data.name,
      "birthday: " + res.data.birthday,
      "sex: " + res.data.gender,
    ].join("\n\n");
    fs.appendFile("log.txt", actorData, (err) => {
      if (err) throw err;
      console.log(actorData);
    });
  });
};
module.exports = TV;
