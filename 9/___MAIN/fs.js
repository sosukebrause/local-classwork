var fs = require("fs");
var userInput = process.argv[2];

fs.readFile("./data.csv", "utf8", function (error, data) {
  if (error) {
    return console.log(error);
  } else {
    console.log(data);
  }
});
//always bring in three parameters inside the function above. ```readFile()```
///first one is the file in quotes
//second is utf8 which makes it human readable
//third is the function
//typically we've included the two following parameters: (error, data)

fs.writeFile("logt.txt", userInput, function (error) {
  if (error) {
    return console.log(error);
  }
  console.log("file saved");
});

///always bring in three parameters inside the above function ```writeFile()```
//first is the file. It'll create a new one for you if it's not there
//then in second position the thing you want written inside that file, typically: JSON.stringify(response)
//the third is the function
var fs = require("fs");
input = process.argv[2];
fs.appendFile("sos.json", "\n" + input + "\n", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("append success");
  }
});

var person = {
  name: "mario",
  says: function () {
    console.log("IT'S ME ");
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
}; // person.says();

//example of template literal

let tempLit;

tempLit = (st, nm) => {
  console.log(`hello ${st}${nm}`);
};

tempLit("Template ", "Literal!");

const myGuy = (x, y) => {
  console.log("howdy", x, y);
};
myGuy("my", "guy");
