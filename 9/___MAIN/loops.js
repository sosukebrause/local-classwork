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
