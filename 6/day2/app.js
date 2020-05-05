$(document).ready(function () {
  var inputText = "";
  var apikey = "s6Wz4KXatBELd672KSk98VxpF8XDks0O";

  $("#submitbtn").on("click", function (e) {
    e.preventDefault();
    inputText = $("#inputText").val();
    console.log(inputText);

    $("#inputText").val("");

    $.ajax({
      type: "GET",
      dataType: "JSON",
      url: `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=20&q=${inputText}`,
    }).then(function (response) {
      // console.log(response.data[0].images.original.url);
      var gif = response.data[0].images.original.url;
      var randNum = Math.floor(Math.random() * response.data.length);
      console.log(response.data);
      console.log(randNum);
      $("body").prepend(`<img src="${gif}">${gif}</img>`);
    });
  });
});
// api.giphy.com / v1 / gifs / search;
// ;

$;
