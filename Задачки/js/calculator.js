const calculator = {
  firstValue: 0,
  secondValue: 0,
  result: 0,
  read() {
    this.firstValue = Number(prompt("Enter the first value (a)", "0"));
    this.secondValue = Number(prompt("Enter the second value (b)", "0"));
  },
  sum() {
    return this.firstValue + this.secondValue;
  },
  mul() {
    this.result = this.firstValue * this.secondValue;
    return this.result;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
