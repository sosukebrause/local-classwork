const sayMessage = (name) => {
  return new Promise((resolve, reject) => {
    if (typeof name === "string") {
      resolve("Hello " + name);
    } else {
      reject("Argument must be string");
    }
  });
};
// sayMessage("class".then((res) => console.log(res)));
sayMessage(7)
  .then((res) => console.log(res))
  .catch((res) => console.log({ error: err }));
