// import { resolve } from "dns";

function waitFor(seconds) {
  return new Promise(function (resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function () {
      resolve("waitFor: Success!");
    }, seconds * 1000);
  });
}

waitFor(2)
  .then(function (msg) {
    console.log(msg);
    return waitFor(1);
  })
  .then((msg) => console.log(msg))
  .catch(function (err) {
    console.log(err);
  });

const mess = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds === "number" && seconds > 1) {
      setTimeout(function () {
        resolve("mess: resolved");
      }, seconds * 1000);
    } else {
      reject("This must be a number");
    }
  });
};
mess(2);

const sayThing = async (num) => {
  try {
    const message = await waitFor(num);
    console.log("sayThing async " + message);
  } catch (err) {
    console.log({ err });
  }
};
sayThing(2);

// mess(2)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => console.log(error));
