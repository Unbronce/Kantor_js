// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

function Accumulator(startingValue) {
  this.result = 0;
  this.value = startingValue;
  this.read = function() {
    this.result = this.result + Number(prompt("How much to add?", "0"));
    this.value = startingValue + this.result;
  };
}

// function Accumulator(startingValue) {
//   let result = 0;
//   this.value = startingValue;
//   this.read = function() {
//     result = result + Number(prompt("How much to add?", "0"));
//     this.value = startingValue + result;
//   };
// }

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
