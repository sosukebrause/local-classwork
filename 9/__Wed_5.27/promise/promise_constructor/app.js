// // import { OutgoingMessage } from "http";

// const sayMessage = (name) => {
//   return new Promise((resolve, reject) => {
//     if (typeof name === "string") {
//       resolve("Hello " + name);
//     } else {
//       reject("Argument must be string");
//     }
//   });
// };
// // sayMessage("class".then((res) => console.log(res)));
// sayMessage("first message")
//   .then((res) => console.log(res))
//   .catch((err) => console.log({ error: err }));

// const stateMessage = (namae) => {
//   return new Promise((resolve, reject) => {
//     if (typeof namae === "string") {
//       resolve("Second Message: " + namae);
//     } else reject("Must be proper string");
//   });
// };
// //Promise Object: has two callbacks built in under-the-hood. Can be called whatever, but typically (resolve, reject)
// stateMessage("herro")
//   // .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const messageWithTimer = (time, message) => {
  return new Promise((resolve, reject) => {
    if (typeof time === "number" && typeof message === "string") {
      setTimeout(function () {
        resolve("Message with timer: " + message);
      }, time * 1000);
    } else {
      reject("first must be number, second must be string");
    }
  });
};

// messageWithTimer(1, "No sleeping")
//   .then((res) => {
//     console.log(res);
//     return messageWithTimer(2, " second promise obj");
//   })
//   // .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// //(resolve, reject): where `resolve` stands for the successful output in the promise constructor, and 'reject' is the second callback, which is in our case, the `else` in the`if/else` conditionial. This is also the `err` and is called by the .catch((err)=>(err)) which follows the .then

const timedMessage = (message, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Second timed message " + message);
    }, time * 1000);
  });
};
timedMessage(", no conditional", 1000)
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => console.log(err));

// const thirdTimed = (message, time) => {
//   return new Promise((good, bad) => {
//     setTimeout(function () {
//       good(message + "TimedMessage");
//     }, time);
//   });
// };

// thirdTimed("Fifth try, ", 1000).then((res) => {
//   // console.log(res);
// });

const asyncFun = async () => {
  try {
    const message = await messageWithTimer(2, "Async Message");
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};
asyncFun();

//we always need `await` inside the 'async' function
