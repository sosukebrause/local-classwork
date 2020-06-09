const shows = new Map([
  ["Schitt's", 5],
  ["Shadows", 4],
  ["greys", 3],
]);
shows.set("office", 5);
// console.log(shows);
// console.log(shows.get(5));

for (const [key, value] of shows) {
  console.log(`${key}, is rated ${value}/5`);
}
for (const key of shows) {
  // console.log(`${key}, is rated ${value}/5`);
  console.log(key[0]);
  console.log(shows.get("greys"));
}
shows.forEach((element, i) => {
  // console.log(element, i);
});

const sayHello = (nm, message) => {
  console.log(`hello, ${nm} ${message}`);
};
// sayHello("class", "this is cool JS");

//map is used instead of foreach when adding around the variable

const newArray = ["fun", "js", "cool"];
newArray.map((element) => {
  // console.log(element + "!!");
});

// shows.map((element) => {
//   console.log(element.key);
// });
