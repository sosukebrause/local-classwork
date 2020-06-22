const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse a string", () => {
      const str = "hi";
      const reversed = "ih";
      const result = new Algo().reverse(str);
      expect(result).toEqual(reversed);
    });
  });
  describe("isPalindrome", () => {
    it("should be same word", () => {
      const str = "dad";
      // const pal = "dad";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    });
    it("should be same word", () => {
      const str = "no";
      // const pal = "on";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should cap first letter", () => {
      const str = "ya";
      const caps = "Ya";
      const result = new Algo().capitalize(str);
      expect(result).toEqual(caps);
    });
  });
});
