// function hi(who) {
//   console.log("hello " + who);
// }
// hi("everyone");

const sayConst = (st, nm) => {
  console.log(st + nm);
};
sayConst("wake up, ", "const!");

let sayHello = (st, nm) => {
  console.log(st + nm);
};
sayHello("wake up, ", "let!");

//template literal

// const TLConst = (st, nm) => {
//   console.log("hello " + st + nm);
// };
// TLConst("wake up, ", "const!");

let TLLet = (st, nm) => {
  console.log(`hello TL ${st}${nm}`);
};
TLLet("wake up, ", "let!");

const TLConst = (st, nm) => {
  console.log(`hello ${st}${nm}`);
};
TLConst("wake up, ", "const!");
