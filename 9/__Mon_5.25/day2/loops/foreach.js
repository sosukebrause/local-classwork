const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: "young" },
  { name: "Malcolm", age: "young" },
];

for (let i = 0; i < moviePatrons.length; i++) {
  // console.log(`${i} ${moviePatrons[i].name}`);
}

// moviePatrons.forEach((who, which) => console.log(who.name, which));
//forEach iterates over an item. Starts at the beginning of an array and stop at the end of array. Nothing stops the function from going thru each and every element of the array. The first paramater is the 'element'. It can be called whatever you want. The second optional parameter is always standing for the INDEX of the item i.e. 0, 1, 2, 3 etc.

// moviePatrons.forEach((element, index) => {
//   console.log(element.name, index);
// });

moviePatrons.forEach((element) => {
  // console.log(element.age);
});

const under = moviePatrons.filter((patrons) => {
  return patrons.age != "young";
});
// console.log(under);

const ageEven = moviePatrons.map((element) => {
  return element.age % 2 === 0;
});
console.log(ageEven);

const allowed = moviePatrons.filter((patrons) => {
  return patrons.age > 17;
});
// console.log(allowed);
moviePatrons.map((element, i) => {
  // console.log(i + element.name + "!");
});

for (const kid of moviePatrons) {
  console.log(kid.name);
}
