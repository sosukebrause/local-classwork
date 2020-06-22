$(document).ready(function () {
  console.log("READY");
  $.ajax({
    type: "GET",
    url: "/api",
    dataType: "JSON",
  }).then((res) => {
    console.log(res);
  });
  $.ajax({
    type: "GET",
    url: "/api/proof",
    dataType: "JSON",
  }).then((res) => {
    console.log(res);
  });
});
