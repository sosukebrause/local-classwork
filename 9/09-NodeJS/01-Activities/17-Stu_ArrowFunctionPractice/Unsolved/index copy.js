// // --------------------------------------------------------------------------

// var oddLetters = (string) => {
//   var newString = "";
//   for (var i = 0; i < string.length; i++) {
//     if (i % 2 === 1) newString += string[i].toLowerCase();
//     else newString += string[i].toUpperCase();
//   }
//   return newString;
// };

// console.log(oddLetters("odd letters all day"));

// var everyThird = (string) => {
//   newSentence = "";
//   for (i = 0; i < string.length; i++) {
//     if (i % 3 === 0) newSentence += string[i].toUpperCase();
//     // else newSentence += string[i].toLowerCase();
//   }
//   return newSentence;
// };
// console.log(everyThird("haarikrishna4eva"));

// var theFourth = (alpha) => {
//   newOrder = "";
//   for (i = 0; i < alpha.length; i++) {
//     if (i % 4 === 0) newOrder += alpha[i].toUpperCase();
//   }
//   return newOrder;
// };

// console.log(theFourth("takemetoyourleader"));

var map = (arr, cb) => {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    var currentElement = arr[i];
    result.push(cb(currentElement, i));
  }
  return result;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubled = map(numbers, function (element) {
  return element * 2;
});
// console.log(doubled);

// var mapping = (arr, cb) => {
//   var resulting = [];
//   for (i = 0; i < arr.length; i++) {
//     var currentElement = arr[i];
//     resulting.push(cb(currentElement, i));
//   }
//   return resulting;
// };
// dub = mapping(numbers, function (element) {
//   return element * 1.5;
// });
// console.log(dub);

var filter = (arr, cb) => {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    var currentElement = arr[i];
    if (cb(currentElement, i)) {
      result.push(currentElement);
    }
  }
  return result;
};
var oddNumbers = filter(numbers, (currentElement) => currentElement % 2 != 0);
// console.log(oddNumbers);

var netQ = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club",
  ],
  watchMovie: function () {
    this.queue.pop();
  },
  addMovie: function (movie) {
    this.queue.unshift(movie);
  },
  printQueue: function () {
    var list = "";
    for (i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += this.queue.length - i + ". " + currentMovie + "\n";
    }
    console.log(list);
  },
};
console.log("print movie queue");
netQ.printQueue();
netQ.watchMovie();
console.log("\nwathed one\n");
console.log("printing current movie queue\n");
netQ.printQueue();
netQ.watchMovie();
console.log("\nwatched another from queue and then added to list a new one\n");

netQ.addMovie("Big Whoop");
netQ.printQueue();
