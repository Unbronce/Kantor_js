// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

function Calculator(str) {
  const functions = {};
  this.calculate = function(str) {
    const arr = str.split(" ");
    const operator = arr.splice(1, 1)[0];
    const numbers = arr.map(item => Number(item));
    if (operator === "-") {
      return numbers.reduce((sum, item) => sum - item);
    } else if (operator === "+") {
      return numbers.reduce((sum, item) => sum + item);
    }
    return arr.reduce(functions[operator]);
  };
  this.addMethod = function(operator, func) {
    functions[operator] = func;
  };
}

let calc = new Calculator();
calc.calculate("3 - 7");

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);
