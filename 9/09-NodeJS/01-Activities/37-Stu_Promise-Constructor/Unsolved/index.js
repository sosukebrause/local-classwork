import { resolve } from "dns";

function waitFor(seconds, cb) {
  if (isNaN(seconds) || seconds < 1) {
    return cb(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(function() {
    cb(null, "Success!");
  }, seconds * 1000);
}


waitFor(2, function(err, msg) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(msg);
})

const waitForPromise = (seconds) => 
  return new Promise ((resolve, reject) {

    if (isNaN(seconds) || seconds < 1) {
reject(Erorr("paramter must be positive number"))    
  }
})
  setTimeout(function(){
    resolve("success")
  })
