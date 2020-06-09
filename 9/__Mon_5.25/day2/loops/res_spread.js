const who = {
  name: "tom",
  age: 32,
  live: "SF",
};

// const { name, age } = who;
console.log(who);
const name = who.name;
const age = who.age;
console.log(name, age);

const you = { ...who };

you.name = "Bob";
you.age = 13;
console.log(you);

// console.log(who);
