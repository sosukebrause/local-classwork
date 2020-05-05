$(document).ready(function () {
  console.log("hello");
});

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json",
  }).then(function (response) {
    console.log(response.contents.quotes[0].quote);
    $("body").prepend(`<p>${response.contents.quotes[0]}</p>`);
  });

  $.ajax({
    type: "GET",
    url: "https://icanhazdadjoke.com/",
    dataType: "json",
  }).then(function (res) {
    console.log(res.joke);
    $("body").prepend(`<p>${res.joke}</p>`);
  });
});
