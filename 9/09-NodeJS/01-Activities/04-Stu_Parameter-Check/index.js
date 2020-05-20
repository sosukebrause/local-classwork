console.log(process.argv[2]);
console.log(process.argv);
console.log(typeof process.argv[2]);

var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);
a === b ? console.log(true) : console.log(false);
// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false);
// }
//console.log(a === b);
