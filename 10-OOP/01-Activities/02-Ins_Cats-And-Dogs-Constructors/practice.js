function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function () {
    if (this.raining === true) {
      console.log(this.noise);
    } else {
      console.log("silence");
    }
  };
}
let dogs = new Animal(true, "bark");
let cats = new Animal(true, "nyan");

dogs.makeNoise();

cats.raining = false;
cats.makeNoise();
