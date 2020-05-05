$(document).ready(function () {
  var $h1 = $("<h1>");
  $("body").append($h1);
  $h1.text("we good");
  $h1.attr("class", "red");

  var $p = $("<p>");
  $("body").prepend($p);
  $p.text("this is p");
  $p.attr("class", "blue", "border");

  var $h3 = $("h3");
  // $("body").append($h3);
  // $h3.text("poop");
  $h3.attr("class", "green");

  var $h4 = $("<h4>");
  $("body").append($h4);
  $h4.text("my H4");
  $h4.attr("class", "border");
  $h4.attr("class", "blue");

  var $yay = $("#yay");
  $yay.text("replacing yaya");
  $yay.attr("class", "red");

  let $end = $("<container>");
  $end.text("this is a container for the button: ");
  $("body").append($end);
  $end.attr("class", "red");

  let makeNew = $(`<ul id = "newDiv"></ul>`);
  makeNew.text("making a =new div to put list in");
  $("body").append(makeNew);
  makeNew.attr("class", "border");

  function adding(3) {
    let item = $(`<li>""</li>`);
    makeNew.append(item);
    item.text("try this");
    // makeNew.push("another item");
    item.attr("class", "padding");
  }

  var $start = $("<button>");
  $start.text("click to start");
  $end.append($start);
  $start.attr("class", "border");
});
