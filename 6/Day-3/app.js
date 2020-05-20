$(document).ready(function () {
  console.log("hello movies");
});
$("#submitbtn").on("click", function (e) {
  e.preventDefault();
  input = $("#input").val();
  $("input").val("");
  apiKey = "d106054f";

  $.ajax({
    type: "GET",
    url: `http://www.omdbapi.com/?t=${input}&apikey=${apiKey}`,
  }).then(function (res) {
    console.log(res);
    var title = res.Title;
    var year = res.Year;
    var Actors = res.Actors;
    var poster = res.Poster;
    console.log(poster);
    // $("body").append(`<img src="${poster}"/>`);
    $("poster").prepend(poster);
    $("#title").text(title);
    $("#year").text(year);
    if (res.Year < 2000) {
      $("#classic").text(`${year} This is a classic`);
    } else {
      $("#classic").text("this one is modern");
    }
    $("#history").append(`<li>${title}</li>`);

    // function renderList(str1, str2, str3) {
    //   var title = str1;
    //   var year = str2;
    //   var poster = str3;
    // }
  });
  // renderList();

  $(document).on("click", "#history", function () {
    console.log("hello");
  });
});
