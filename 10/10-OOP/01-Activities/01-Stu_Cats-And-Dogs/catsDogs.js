function Dog(raining, noise, makeNoise) {
  this.raining = true;
  this.noise = "Woof!";
  this.makeNoise = function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}
function Cat(raining, noise, makeNoise) {
  this.raining = false;
  this.noise = "meow!";
  this.makeNoise = function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

cat();
