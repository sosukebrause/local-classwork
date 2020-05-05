$(document).ready(function () {
  var textInput = "";
  try {
    var storeData = JSON.parse(window.localStorage.getItem("storeData"));
  } catch {
    error;
  }
  var apiKey = "9ac0f9d8";
  if (storeData !== null) {
    for (var i = 0; i < storeData.length; i++) {
      $("#movieList").append(`<li class="oldSearch">${storeData[i]}</li>`);
    }
  }
  $(document).on("click", ".oldSearch", function () {
    var newSearch = $(this).html();
    runImbd(newSearch);
  });
  $("#reset").on("click", function () {
    window.localStorage.removeItem("storeData");
    storeData = null;
    window.location.href = "index.html";
  });
  $("#submitBtn").on("click", function (e) {
    e.preventDefault();
    textInput = $("#textInput").val();
    if (!storeData) {
      storeData = [];
    }
    storeData.push(textInput);
    console.log(storeData);
    window.localStorage.setItem("storeData", JSON.stringify(storeData));
    if (storeData !== null) {
      var lastItem = storeData.length - 1;
      $("#movieList").append(
        `<li class="oldSearch">${storeData[storeData.length - 1]}</li>`
      );
    }
    $("#textInput").val("");
    runImbd(textInput);
  });
  function renderInfo(str1, str2, str3, str4) {
    $("#title").text(str1);
    $("#actors").text(str2);
    $("#rated").text(str3);
    $("#year").text(str4);
  }
  function runImbd(str1) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: `http://www.omdbapi.com/?t=${str1}&apikey=${apiKey}`,
    }).then(function (res) {
      console.log(res);
      if (parseInt(res.Year) < 2000) {
        $("#classic").text("This is a classic movie");
      } else {
        $("#classic").text("This is a modern movie");
      }
      renderInfo(res.Title, res.Actors, res.Rated, res.Year);
    });
  }
});
