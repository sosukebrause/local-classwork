// import { resolve } from "dns";

function waitFor(seconds) {
  return new Promise(function (resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function () {
      resolve("Success!");
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

// waitFor(2, function(err, msg) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(msg);
// })

// const waitForPromise = (seconds) =>
//   return new Promise ((resolve, reject) {

//     if (isNaN(seconds) || seconds < 1) {
// reject(Erorr("paramter must be positive number"))
//   }
// }
//   setTimeout(function(){
//     resolve("success")
//   })
