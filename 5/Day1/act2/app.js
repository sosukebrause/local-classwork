// $(document).ready(function () {
//   var $h1 = $("<h1>");
//   console.log($h1);

//   var $h3 = $("h3");
//   console.log($h3.text());

//   $h3.attr("class", "red");

//   console.log($h3.attr("class"));
// });

function greet(who) {
  console.log("hello " + who);
}
greet("amanda");

function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(11);
console.log(wrap1());

function power(base, exponent = 2) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(5, 3));
