setTimeout(() => {
  console.log("first message");
  setTimeout(() => {
    console.log("second message");
    setTimeout(() => {
      console.log("callback hell");
    }, 2000);
  }, 2000);
}, 2000);

function sayHello(message, cb) {
  cb("hello" + message);
}
sayHello("class", (res) => {
  console.log(res);
});
