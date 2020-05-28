$(document).ready(function () {
  var textAdded = "";
  var arr1 = [];

  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    textAdded = $("#textInput").val();
    arr1.push(textAdded);
    refreshList();
    renderTodos();
  });
  function renderTodos() {
    $("#textInput").val("");
    $("#cardContainer").html("");
    for (var i = 0; i < arr1.length; i++) {
      $("#cardContainer").prepend(`<h1 class="btn">${arr1[i]}</h1>`);
    }
  }

  function refreshList() {
    $("#textInput").val("");
    $("#textContainer").html("");
    for (i = 0; i < arr1.length; i++) {
      $("#textContainer").prepend(`<h4 class="btn">${arr1[i]}</h4>`);
    }
  }
  $(document).on("click", ".btn", function () {
    console.log($(this).text());
  });
});
