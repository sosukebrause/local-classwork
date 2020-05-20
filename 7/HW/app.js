$(document).ready(function () {
  console.log("hello");
  var currentDate = moment().format("MMMM Do YYYY, h:mm a");
  $("#currentDate").text(currentDate);

  $("#btnSubmit1").on("click", function () {
    var userText = $("#textInput6").val();
  
    localStorage.setItem("data6", JSON.stringify({ task: userText }));

    render6Dta();
    refresh();
    
  });
  function render6Dta() {
    var item = JSON.parse(localStorage.getItem("data6"));
    if (item != null) {
      $("#textInput6").val(item.task);
    }
  }

  $("#btnSubmit2").on("click", function () {
    var userText = $("#textInput7").val();
    // console.log(userText)
    localStorage.setItem("data7", JSON.stringify({ task: userText }));
    render7Dta;
  });
  function render7Dta() {
    var item = JSON.parse(localStorage.getItem("data7"));
    if (item != null) {
      $("#textInput7").val(item.task);
    }
  }

    $("#input").val("94117");
    $("#submitbtn").on("click", function (e) {
      e.preventDefault();
      input = $("#input").val();
      $("#input").val("");

      $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=c1dc5cf44c3a5ebaadb89b904175bcca`,
        dataType: "JSON",
      }).then(function (response) {
        console.log(response);
        var city = response.name;
        var desc = response.weather[0].description;
        var temp = response.main.temp;
        var tempC = temp - 273.15;
        var tempF = (1.8 * tempC + 32).toFixed(1);

        $("body").append(`<div>city name: ${city}</div>`);
        $("body").append(`<div>Weather: ${desc}</div>`);
        // $("body").append(`<div>Celcius ${tempC}</div>`);
        $("body").append(`<div>Fahrenheit: ${tempF}</div>`);
      });
    });

  function refresh() {
    $("#textInput6").val("");
  }


});
