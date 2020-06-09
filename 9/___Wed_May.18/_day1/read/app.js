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

//loops//
const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: "young" },
  { name: "Malcolm", age: "young" },
];
//regular forLoop
for (let i = 0; i < moviePatrons.length; i++) {
  console.log(`${i} ${moviePatrons[i].name}`);
}

moviePatrons.forEach((who, which) => console.log(who.name, which));
//FOREACH FUNCTION: forEach iterates over an item. Starts at the beginning of an array and stop at the end of array. Nothing stops the function from going thru each and every element of the array. The first paramater is the 'element'. It can be called whatever you want. The second optional parameter is always standing for the INDEX of the item i.e. 0, 1, 2, 3 etc.

// moviePatrons.forEach((element, index) => {
//   console.log(element.name, index);
// });

moviePatrons.forEach((element) => {
  console.log(element.age);
});

//FILTER FUNCTIOn: filter used just like forEach to RETURN something that meets a criteria or range, declared but the function

const under = moviePatrons.filter((patrons) => {
  return patrons.age != "young";
});
console.log(under);

const ageEven = moviePatrons.filter((element) => {
  return element.age % 2 === 0;
});
console.log(ageEven);

const allowed = moviePatrons.filter((patrons) => {
  return patrons.age > 17;
});
console.log(allowed);

//MAPS FUNCTION//
//map does exactly what forEach does
//returns boolian result true/false
//if changing the value, use map function. You are using the map function to reassign values with a template
//the parameter item can be anything, the second thing will always be the index

moviePatrons.map((element) => {
  console.log(element.name + "!");
});

const movies = new Map([
  ["Bridesmaid", 5],
  ["Mean Girls", 4],
  ["Evil Dead", 3],
  ["Dumber and Dumber", 5],
]);
movies.set("Avatar", 5);
//set function works like push, for maps
console.log(movies.get("Bridesmaid"));

// console.log(movies);

//this is the `for...of` function which is used on maps
for (const [key, value] of movies) {
  if (value > 4) {
    console.log(key);
  }
}

//below is the rest operator, where we spread the object using { ...object }

const me = {
  name: "Sos",
  age: "32",
  live: "SF",
};
const who = { ...me };
who.name = "Sten";
