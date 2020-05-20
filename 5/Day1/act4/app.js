
$(document).ready(function () {
  var $h2 = $("<h2>");
  var plusOne = 0
  $h2.text(plusOne)
  $("#btnSubmit").on("click", function (event) {
    event.preventDefault()
    plusOne++;
    $h1.attr("class", "red");
    return $h1++;
  });
});

// solved

$(document).ready(function () {
  var counter = 0;
  var $h1 = $("<h1>");
  $("body").prepend($h1);
  $h1.text(counter);
​
  $("#btnSubmit").on("click", function (event) {
    counter++;
    $h1.text(counter);
  });
  $("#btnReset").on("click", function () {
    counter = 0;
    $h1.text(counter);
  });
});
