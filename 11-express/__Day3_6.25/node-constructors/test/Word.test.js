const Word = require("../util/Word.js");

// describe("word", () => {
//   describe("Success: creating", () => {
//     it("should create new word object with the word set to arg", () => {
//       const testWord = new Word("test");
//       expect(testWord).toEqual({ word: "test" });
//     });
//     //'it' is starting a test
//     it("should return word", () => {
//       const testWord = new Word("test");
//       expect(testWord.getWord).toBe("test");
//     });
//   });
// });

// describe("Success: setter", () => {
//   it("should create new word object with the word set to arg", () => {
//     const testWord = new Word("test");
//     testWord.setWord = "thing";
//     expect(testWord).toEqual({ word: "thing" });
//   });
// });
describe("reversing", () => {
  it("should create word reversed", () => {
    const testWord = new Word("retteg");
    expect(testWord.rev).toBe({ word: "getter" });
  }); // this will only work when toEqual 
});
// describe("Success: cap", () => {
//   it("should create CAPS", () => {
//     const testWord = new Word("capped");
//     expect(testWord.cap).toEqual({ word: "CAPPED" });
//   });
// });

describe("Success: pal", () => {
  it("should return true new word object pal", () => {
    const testWord = new Word("dad");
    const testWord2 = new Word("dab");
    expect(testWord.isPal).toBe(true);
    // tomas says it should be to be but both work
    expect(testWord2.isPal).toEqual(false);
  });
});
console.log();
// function returnThing() {
//   return hello;
// }
// console.log(returnThing === "hello");
