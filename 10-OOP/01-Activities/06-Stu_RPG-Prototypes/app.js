myArray = [];

function Character(name, profession, age, strength, HP) {
  (this.name = name), (profession = profession), (age = age), (HP = HP);
}
console.log(Character);
const Bowser = new Character("Bowser", "lizard", 200, 1000);

Character.prototype.isAlive = function () {
  if (this.hitPoints < 1) {
    return false;
  } else {
    return true;
  }
};

Character.prototype.Attack = function (enemy) {
  this.Character;
};
