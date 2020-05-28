// function hi(who) {
//   console.log("hello " + who);
// }
// hi("everyone");

var sayHello = (st, nm) => {
  console.log(st + nm);
};
sayHello("wake up, ", "sheeple!");

let cF;

cF = (n) => {
  const newLocal = (1.8 * (n - 284.35) + 32).toFixed(1);
  console.log(newLocal);
};

cF(20);
