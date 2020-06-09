function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
}
MiniBank.prototype.setBalance = function (value) {
  this.balance = value;
};
MiniBank.prototype.updateStatement = function (num) {
  this.statement = [...this.statement, num];
};
MiniBank.prototype.getStatement = function () {
  return this.statement;
};
MiniBank.prototype.printStatement = function () {
  this.statement.forEach((record) => {
    console.log(record);
  });
};
MiniBank.prototype.deposit = function (value) {
  this.updateStatement(value);
  this.setBalance((this.balance += value));
};
MiniBank.prototype.withdraw = function (value) {
  this.updateStatement(value * -1);
  this.setBalance((this.balance -= value));
};
const ATM_broadway = new MiniBank(5);
const ATM_grand = new MiniBank(10);
ATM_broadway.withdraw(2);
console.log(ATM_broadway);
