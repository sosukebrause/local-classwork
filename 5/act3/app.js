$(document).ready(function () {
  var $h1 = $("<h1>");
  $("body").append($h1);
  $h1.text("we good");
  $h1.attr("class", "red");

  var $p = $("<p>");
  $("body").prepend($p);
  $p.text("this is p");
  $p.attr("class", "blue");

  var $h3 = $("h3");
  // $("body").append($h3);
  // $h3.text("poop");
  $h3.attr("class", "green");

  var $h4 = $("<h4>");
  $("body").append($h4);
  $h4.text("my H4");
  $h4.attr("class", "blue");

  var $yay = $("#yay");
  $yay.text("replacing yaya");
  $yay.attr("class", "red");
});
