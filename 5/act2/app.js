$(document).ready(function () {
  var $h1 = $("<h1>");
  console.log($h1);

  var $h3 = $("h3");
  console.log($h3.text());

  $h3.attr("class", "red");

  console.log($h3.attr("class"));
});
