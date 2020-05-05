$(document).ready(function () {
  // var $h1 = document.createElement("h1");
  console.log("jquery is hooked up prop");

  var $h1 = $("<h1>");
  $("body").append($h1);
  $h1.text("hello world");

  var $h3 = $("<h3>");
  $("body").append($h3);
  $h3.text("example text");
  $h3.attr("style = color: blue");
  var par = $(`<p>`);
  $("body").append(par);
  par.text("this is the paragraph");

  var pp = $(`<p>`);
  $("body").append(pp);
  pp.text("this is another pp");

  let Olist = $(`<ol id="Olist">`);
  $(`body`).append(Olist);
  Olist.text("My Ordered List:");
  let list1 = $(`<li>`);
  let list2 = $(`<li>`);
  list1.text("number one");
  list2.text("number two");
  $("#Olist").append(list1, list2);
  // $("#Olist").append(list2);

  var button = $("<button>");

  var next = $(`<button>`);
  $("body").prepend(next);
  next.text("next question");
  next.attr("class", "blue");

  $("#todoContainer").text("this is the div with id todoContainer");
});
