const Dog = function () {
  this.raining = true;
  this.noise = "woof";
  this.makeNoise = function () {
    if (this.raining) {
      console.log(this.noise);
    }
  };
};
const dustin = new Dog();
const saleen = new Dog();
saleen.makeNoise();

const Cat = function () {
  this.raining = true;
  this.noise = "choo choo";
  this.makeNoise = function () {
    if (this.raining) {
      console.log(this.noise);
    }
  };
};

const gordy = new Cat();
gordy.makeNoise();
if (gordy.raining === true && Dog.raining === true) {
  console.log("Crazy");
}
