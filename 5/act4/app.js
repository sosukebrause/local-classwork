
$(document).ready(function ($h1 + 1) {
  var $h2 = $("<h2>");
  $h2.text(1)
  var plusOne = (0)
  $("#btnSubmit").on("click", function () {
    plusOne++;
    $h1.attr("class", "red");
    return $h1 + 1;
  });
});

// solved

$(document).ready(function () {
  var counter = 0;
  var $h1 = $("<h1>");
  $("body").prepend($h1);
  $h1.text(counter);
​
  $("#btnSubmit").on("click", function () {
    counter++;
    $h1.text(counter);
  });
  $("#btnReset").on("click", function () {
    counter = 0;
    $h1.text(counter);
  });
});
