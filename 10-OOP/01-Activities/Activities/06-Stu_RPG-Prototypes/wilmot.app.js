function Character(name, job) {
  this.name = name;
  this.profession = job;
  this.age = 18;
  this.str = 5;
  this.hp = 20;
}
Character.prototype.printStats = function () {
  console.log(
    "Name: " +
      this.name +
      "\nProfession: " +
      this.profession +
      "\n" +
      this.age +
      " years old" +
      "\nStrength: " +
      this.str +
      "\n" +
      this.hp +
      " hp"
  );
};
Character.prototype.IsAlive = function () {
  let alive = true;
  if (this.hp > 0) {
    alive = true;
  } else {
    alive = false;
  }
  return alive;
};
Character.prototype.Attack = function (name) {
  name.hp -= this.str;
};
Character.prototype.levelUp = function () {
  this.age += 1;
  this.str += 5;
  this.hp += 25;
};
const Rage = new Character("Rage", "Captain");
const Ruby = new Character("Ruby", "Scout");
Rage.printStats();
Ruby.printStats();
Rage.Attack(Ruby);
Ruby.printStats();
