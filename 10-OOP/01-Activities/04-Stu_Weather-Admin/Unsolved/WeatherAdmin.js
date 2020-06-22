var fs = require("fs");
var UserSearch = require("./UserSearch.js");
var moment = require("moment");
//must `npm i moment` to use above

var WeatherAdmin = function () {
  this.getData = function () {
    fs.readFile("log.txt", "utf8", function (error, data) {
      if (error) throw err;
      else {
        console.log(data);
      }
    });
  };
  //node uses error first callback. Error is always the first item in the paramter

  this.newUserSearch = function (name, location) {
    var newUserSearch = new UserSearch(name, location);
    var logTxt =
      "\nName: " +
      newUserSearch.name +
      " Location: " +
      newUserSearch.location +
      " Date: " +
      moment(newUserSearch.date).format("MM-DD-YYYY");

    fs.appendFile("log.txt", logTxt, "utf8", (err) => {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
