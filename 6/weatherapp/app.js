$(document).ready(function () {
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
});
