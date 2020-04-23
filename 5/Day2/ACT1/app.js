$(document).ready(function () {
  var textInput = "";
  var textArray = [];
  // ​  $("#alert").hide();
  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    textInput = $("#textInput").val();
    console.log(textInput);
    textArray.push(textInput);
    // console.log(textArray);
    renderTodos();
    showAlert("successfully added");
    $("#textContainer").prepend(`<h1>${textInput}</h1>`);
  });
  function renderTodos() {
    $("#textInput").val("");
    $("#textContainer").html("");
    for (var i = 0; i < textArray.length; i++) {
      // $("#textContainer").prepend('<h1 class="btn">${textArray[i]}</h1>');
    }
  }
  $(document).on("click", ".btn", function () {
    console.log(this);
  });
  function showAlert(str) {
    $("#alert").show();

    window.setTimeout(function () {
      $("#alert").hide();
    }, 2000);
  }
  // $("#delete").html("<h1>This will replace</h1>");
});
