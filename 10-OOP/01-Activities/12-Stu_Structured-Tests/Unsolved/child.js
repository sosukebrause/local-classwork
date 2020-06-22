function Child(name, age) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof age !== "number" || isNaN(age) || age < 0) {
    throw new Error("Expected parameter 'age' to be a non-negative number");
  }

  this.name = name;
  this.age = age;
}
//this is the constructor function. It has an empty string for name, and a number for age, to be added when the function is called.
module.exports = Child;
