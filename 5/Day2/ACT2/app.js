$(document).ready(function () {
  var textInput = "";
  var textArray = [];
  $("#alert").hide();
  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    textInput = $("#textInput").val();
    if (textInput.length > 0) {
      textArray.push(textInput);
      showAlert("You have succesfully added a todo", "primary");
      renderTodos();
    } else {
      showAlert("Text can not be empty", "danger");
    }
  });

  $("#alert").on("click", function () {
    $("#alert").hide();
  });
  $(document).on("click", ".btn", function () {
    console.log($(this).text());
  });

  $(document).on("click", ".btnDelete"),
    function () {
      // console.log("hello");
    };

  function renderTodos() {
    $("#textInput").val("");
    $("#cardContainer").html("");
    for (var i = 0; i < textArray.length; i++) {
      $("#cardContainer").prepend(`
      <div class="card mb-3">
        <div class="card-body">
          <p>
              ${textArray[i]}

          </p>
          <div class="text-right">
            <button data-id=${i} class="btnSucess btn btn-success" style="width: 100px;">
              Edit
            </button>
            <button data-id=${i} class="btnDanger btn btn-danger" style="width: 100px;">
              Danger
            </button>
          </div>
        </div>
      </div>`);
    }
  }
  function showAlert(str, type) {
    $("#alert").show();
    $("#alert").attr("class", `alert alert-${type}`);
    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 1000);
  }
});
