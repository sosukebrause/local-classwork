var demoObject = {
  name: "Thomas",
  data: ["Tom", "Will", "Smith"],
  betterData: [true, 23, { car: ["honda", "ford"], crazyData: [1, 2, 3, 4] }],
};

var quiz = {
  questions: "who?",
  options: ["1. bob", "2. amy", "3. dan", "4. sos"],
  answer: 3,
};
console.log(quiz.questions);
console.log(quiz.options);
// console.log(demoObject.crazyData);
var CD3 = demoObject.betterData[2].crazyData[2];
// console.log(CD3);
// console.log(demoObject.betterData[2].car);
var carName = demoObject.betterData[2].car;
var crazyArray = demoObject.betterData[2].crazyData;
// console.log(carName, crazyArray);
// for (var i = 0; i < response.data.length; i++)
//   console.log(demoObject.betterData[2].crazyData[i]);
// console.log(demoObject.data[1]);
// // show { car: 'honda' }
// console.log(demoObject.betterData[2]);
