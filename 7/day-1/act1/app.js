$(document).ready(function () {
  console.log("hello");
  var currentDate = moment().format("MMMM Do YYYY, h:mm a");
  $("#currentDate").text(currentDate);

  $("#btnSubmit1").on("click", function () {
    var userText = $("#textInput6").val();
    console.log(userText);
    // localStorage.setItem("data6", "setting item data6");
    // console.log(typeof userText);
    localStorage.setItem("data6", JSON.stringify({ task: userText }));

    render6Dta();
    refresh();
    // item = JSON.parse(localStorage.getItem("data6"));
    // $("#textInput6").val(item.data6);
    // $("#textInput6").val(item.task);
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

  function refresh() {
    $("#textInput6").val("");
  }
});
