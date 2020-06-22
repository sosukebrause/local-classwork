function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];

  this.setBalance = function (value) {
    this.balance = value;
  };
  this.updateStatement = function (num) {
    this.statement.push(num);
    // this.statement = [...this.statement, num]
  };
  this.getStatement = function () {
    return this.statement;
  };
  this.printStatement = function () {
    this.statement.forEach((record) => {
      console.log(record);
    });
  };
  this.deposit = function (value) {
    this.updateStatement(value);
    this.setBalance((this.balance += value));
  };
  this.withdraw = function (value) {
    this.updateStatement(value * -1);
    this.setBalance((this.balance -= value));
  };
}
const ATM = new MiniBank(10);
ATM.deposit(20);
console.log(ATM.balance);
ATM.withdraw(5);
console.log(ATM);
