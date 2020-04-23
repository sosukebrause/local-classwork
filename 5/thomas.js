$(document).ready(function () {
  console.log("hello");
  // create the avriable outside of the click function, else it gets
  // created every click
  var textInput = "";
  var arr1 = [];
​
  // when the submit button is clicked..
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
​
    // log whatever text is put into the text input
    textInput = $("#textInput").val();
​
    // add the inputted text into an array
    arr1.push(textInput);
    // run code to refresh the list with the new item
    refreshList();
  });
​
  function refreshList() {
    // reset the text input box to be empty
    $("#textInput").val("");
    // clear out the textContainer
    $("#textContainer").html("");
    // prepend each item in the array to the screen
    for (var i = 0; i < arr1.length; i++) {
      $("#textContainer").prepend(`<h1 class="btn">${arr1[i]}</h1>`);
    }
  }
​
  // check the whole document, all of the time, for a click on a class of .btn
  // console.log the text value of the thing you clicked
  $(document).on("click", ".btn", function () {
    console.log($(this).text());
  });
  // use like innerHTML to clear the screen
  // add html element between quotes to replace
  $("#delete").html("");
});
​
// add items to array when submit button is clicked