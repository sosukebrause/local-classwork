$(document).ready(function () {
  console.log("hello");
  $.ajax({
    type: "GET",
    url:
      "https://api.giphy.com/v1/gifs/trending?api_key=u4W2n9TGeBTjCBWXia3LXbtSnq6qJ2PR",
    dataType: "json",
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      var still = response.data[i].images.original_still.url;
      var gif = response.data[i].images.original.url;
      $("body").prepend(
        `<img class="gif" data-still=${still} data-gif=${gif} src=${still}></img>`
      );
    }
  });
  $(document).on("click", ".gif", function () {
    console.log($(this).attr("src"));
    if ($(this).attr("src") === $(this).attr("data-still")) {
      $(this).attr("src", $(this).attr("data-gif"));
    } else {
      $(this).attr("src", $(this).attr("data-still"));
    }
  });
});
