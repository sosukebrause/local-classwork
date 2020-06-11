$(document).ready(function () {
  console.log("hello");

  var textInput = "";
  var textArray = [];

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    textInput = $("#textInput").val();
    console.log(textInput);

    textArray.push(textInput);
    console.log(textArray);
    $("#textInput").val("");
    $("#textContainer").prepend("<h1>${textInput}</h1>");
    $("#textContainer").html("");
    for (var i = 0; i < textArray.length; i++)
      $("#textContainer").prepend("<h1>${textArray[i]}</h1>");
  });
  

  $("#delete").html("<h1>This will replace</h1>");
});
