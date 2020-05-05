$(document).ready(function () {
  $.ajax({
    type: "GET",
    url:
      "https://api.giphy.com/v1/gifs/trending?api_key=s6Wz4KXatBELd672KSk98VxpF8XDks0O",

    dataType: "json",
  }).then(function (response) {
    console.log(response);
    console.log(response.data[0].images.original.url);
    var gif = response.data[2].images.original.url;
    var still = response.data[2].images.original_still.url;

    $("body").prepend(`<img src="${gif}"></img>`);
    $("body").prepend(`<img src="${still}"></img>`);
    $(document).on("click",".gif", function (){
      if($(this).attr("src")===$(this).attr("data-still") {
        console.log("we shoudl make this animated now")

        $(this).attr("src", $(this).attr("data-gif"));
      })
    })
  });
});
