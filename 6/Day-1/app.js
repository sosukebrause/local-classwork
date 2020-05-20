$(document).ready(function () {
  console.log("hello");
});

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json",
    dataType: "JSON",
  }).then(function (response) {
    console.log(response.contents.quotes[0].quote);
    $("#results").append(`<p>${response.contents.quotes[0].quote}</p>`);
  });

  $.ajax({
    type: "GET",
    url: "https://icanhazdadjoke.com/",
    dataType: "json",
  }).then(function (res) {
    console.log(res.joke);
    $(".container").prepend(`<h5>${res.joke}</h5>`);
  });

  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    input = $("#search").val();
    apiKey = "d106054f";

    $("input").val("");
    $.ajax({
      type: "GET",
      url: `http://www.omdbapi.com/?t=${input}&apikey=${apiKey}`,
      dataType: "JSON",
    }).then(function (res) {
      console.log(res);
      var title = res.Title;
      var year = res.Year;
      var Actors = res.Actors;
      var poster = res.Poster;
      console.log(poster);
      $("body").append(`<img src="${poster}"/>`);
      $(".container").text(`<h5>${year}</h5>`);
      $(".resuts").text(`<p>${Actors}</p>`);
      $("#title").text(`<h2>${title}</h2>`);
      // $("#year").text(year);
      if (res.Year < 2000) {
        $("#classic").text(`${year} This is a classic`);
      } else {
        $("#classic").text("this one is modern");
      }
      $("#pastSearches").append(`<li>${title}</li>`);
    });
  });
});
