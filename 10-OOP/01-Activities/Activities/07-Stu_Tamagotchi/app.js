function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
}

DigitalPal.prototype.feed = function () {
  if (this.hungry) {
    console.log("No thanks, I'm full");
  } else {
    console.log("That was yummy");
    this.hungry = false;
    this.sleepy = true;
  }
};

DigitalPal.prototype.sleep = function () {
  if (this.sleepy === true) {
    console.log("Zzzzzz");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  } else {
    console.log("I'm tired");
  }
};
DigitalPal.prototype.play = function () {
  if (this.bored === true) {
    console.log("Yay let's play");
    this.bored = false;
    this.hungry = false;
  }
};
