import { async } from "rxjs/internal/scheduler/async";

const messageWithTimer = (time, message) => {
  return new Promise((resolve, reject) => {
    if (typeof time === "number" && typeof message === "string") {
      setTimeout(() => resolve(message), time * 1000);
    } else {
      reject("first arg must be number, second must be str");
    }
  });
};
messageWithTimer(2, "Hello all").then((res) => console.log(res));

messageWithTimer(2, "Hello Danielle")
  .then((res) => {
    console.log(res);
    return messageWithTimer(2, "Hello Maria");
  })
  .then((res) => console.log(res))
  .catch((err) => console.log({ error: err }));

const asyncFunc = async () => {
  try {
    const message = await messageWithTimer("2", "Amanda");
    console.log(message);
  } catch (err) {
    console.log({ error: err });
  }
};

asyncFunc();
