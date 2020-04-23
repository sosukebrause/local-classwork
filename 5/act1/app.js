$(document).ready(function () {
  // var $h1 = document.createElement("h1");
  console.log("jquery is hooked up prop");

  var $h1 = $("<h1>");
  $("body").append($h1);
  $h1.text("hello world");

  var $h3 = $("h3");
  $("body").append($h3);
  $h3.text("example text");

  $todoContainer.text("this is the div with id todoContainer");
});
