console.log("hell thereo");

var myBday = "05/18/1989";

var convertedDate = moment(myBday, "MM/DD/YYYY");

console.log(convertedDate.format("DDdd"));
console.log(convertedDate.format("dddd"));
console.log(typeOf(convertedDate).format("dddd"));

var time = moment().format("h:mm:ss a");
var time = moment().format("h a");

console.log(moment().subtract(10, "days").calendar());
console.log(moment().add(10, "days").calendar());
