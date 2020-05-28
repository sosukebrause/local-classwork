$(document).submit(function () {
  // prevent the default behavior of the submit
  event.preventDefault();

  // grab the show information from the form on the page
  var searchInformation = $("#showSearch").val();

  console.log(searchInformation);

  // console.log the input

  // this is the api we are using add your search variable to end of the queryURL
  var queryURL = "http://api.tvmaze.com/search/shows?q=" + searchInformation;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response[0].show.image.medium);

    for (var i = 0; i < 3; i++) {
      $(".shows").append("<img src=" + response[i].show.image.medium + ">");
      console.log(response[i].show.name);
      $(".shows").append(`<div>` + response[i].show.name + `<div>`);
      $(".shows").append(`<div> <p>` + response[i].show.genres + `</p></div>`);
      $(".shows").append(`<div> <p>` + response[i].show.summary + `</p></div>`);
    }
    // console.log the response
    // create a forloop and append the first 3 responses to the page
    // console.log the image and then append it to the page.
    // console.log the name of the show and append it to the page
    // console.log the genres of the show and append it to the page
    // console.log the summary of the show and append it to the page
  });
});
