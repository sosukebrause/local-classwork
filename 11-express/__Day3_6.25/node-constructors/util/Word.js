class Word {
  constructor(wrd) {
    this.word = wrd;
  }
  get cap() {
    return new Word(this.word.toUpperCase());
  }
  get rev() {
    return new Word(this.word.split("").reverse().join(""));
  }
  get getWord() {
    return this.word;
  }
  set setWord(wrd) {
    this.word = wrd;
  }
  get isPal() {
    return this.word.split("").reverse().join("") === this.word;
  }
}
//getter has to return something cannot take an arg, and setter has to take an arg and cannot return something

module.exports = Word;
