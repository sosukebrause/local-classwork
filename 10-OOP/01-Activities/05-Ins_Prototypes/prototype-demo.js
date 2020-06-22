// 1.
myArray = [2, 4, 6, 8];
// console.log(myArray);

// myArray.forEach((num) => console.log(num));
myArray.forEach(function (num) {
  //   console.log(num);
});
// myArray.map((x) => console.log(x * 2));
// //

// 2.
myObject = {
  name: "Eric",
  age: 28,
  occupation: "Curriculum Dev",
};
// console.log(myObject.age);
// console.log(myObject.age.toString());
// console.log(myObject.occupation.toUpperCase());

// console.log(myObject);

// console.log("Hello");
// console.log("Hello".toLowerCase());

// console.log(1337);
console.log((1337).toString());
// //

// 3.
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

Movie.prototype.logInfo = function () {
  console.log(`${title} was released in ${releaseYear}`);
};

const theShining = new Movie("The Shining", 1980);
theShining.logInfo();

console.log(theShining.hasOwnProperty("title"));
console.log(theShining.hasOwnProperty("logInfo"));
console.log(Movie.prototype.hasOwnProperty("logInfo"));
// //
