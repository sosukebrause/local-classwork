$(document).ready(function () {
  // var input = "";
  $("#submitbtn").on("click", function (e) {
    e.preventDefault();
    input = $("input").val();
    $("input").val("");

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=c1dc5cf44c3a5ebaadb89b904175bcca`,
      dataType: "JSON",
    }).then(function (response) {
      console.log(response);
      var city = response.name;
      var temp = response.main.temp;
      var tempC = temp - 273.15;
      var tempF = (1.8 * tempC + 32).toFixed(2);

      $("body").append(`<div>city name: ${city}</div>`);
      $("body").append(`<div>Temp: ${temp}</div>`);
      $("body").append(`<div>Celcius ${tempC}</div>`);
      $("body").append(`<div>Fahrenheit: ${tempF}</div>`);
    });
  });
});
