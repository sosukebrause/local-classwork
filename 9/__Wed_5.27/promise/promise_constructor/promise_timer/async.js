const messageWithTimer = (time, message) => {
  return new Promise((resolve, reject) => {
    if (typeof time === "number" && typeof message === "string") {
      setTimeout(function () {
        resolve(message);
      }, time * 1000);
    } else {
      reject("first argument must be number, second should be string");
    }
  });
};
messageWithTimer(1, "Hello Danielle")
  .then((res) => {
    console.log(res);
    return messageWithTimer(2, "Hello Said");
  })
  .then((res) => console.log(res));

(async () => {
  try {
    const message = await messageWithTimer(2, "Amanda");
    console.log(message);
  } catch (err) {
    console.log({ error: err });
  }
})();

const asyncFun = async () => {
  try {
    const message = await messageWithTimer(2, "Async Message");
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};
asyncFun();
