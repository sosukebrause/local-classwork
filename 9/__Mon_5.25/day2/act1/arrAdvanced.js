// var sayHello = (st, nm) => {
//   console.log(st + nm);
// };
// sayHello("wake up, ", "sheeple!");

// var sayHello = (nm) => {
//   return "hey " + nm;
// };
// console.log(sayHello("class"));

// // same as above
// var sayBye = (nm) => "bye " + nm;
// console.log(sayBye("class"));

// var pickUp = (child) => "Pick up " + child;
// console.log(pickUp("cleo"));

// var dropOff = (vehicle) => "meet Alex for " + vehicle;
// console.log(dropOff("bicycle"));

// var witch = (method) => {
//   return "old " + method;
// }
// console.log(witch("way"));

var person = {
  name: "mario",
  says: function () {
    console.log("IT'S ME ");
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};
// person.says();

var guys = {
  name: "luigi",
  states: function () {
    console.log("It is I, ");
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
// guy.states();

const yay = {
  who: "tom",
  says: function () {
    console.log("whatever");
    setTimeout(() => {
      console.log("you say");
    }, 2000);
  },
};
yay.says();
