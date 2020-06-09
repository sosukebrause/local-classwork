const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: "young" },
  { name: "Cherrie", age: 14 },
  { name: "Malcolm X", age: 11 },
  { name: "Malcolm", age: "old" },
];
// const under = moviePatrons.filter((patrons) => {
//   return patrons.age != "young";
// });
// console.log(under);

const ageEven = moviePatrons.filter((element) => {
  return element.age % 2 !== 0;
});
console.log(ageEven);
let allowed = moviePatrons.filter((patrons) => patrons.age < 19);
console.log(allowed);

//BELOW CODE DOES NOT WORK//
// ageType = moviePatrons.filter((element) => {
//   // return element.age == "young";
//   if ((element.name = "Malcom")) {
//     return element;
//   }
// });
// console.log(ageType);
//////////////////////////

// for (let i = 0; i < moviePatrons.length; i++) {
// console.log(`moviePatrons[i].name);
// }

// moviePatrons.forEach((who, which) => console.log(who.name, which));

// moviePatrons.forEach((element, index) => {
//   console.log(element.name, index);
// });

// moviePatrons.forEach((element) => {
//   console.log(element.age);
// });
