// Write a function printNumbers(from, to)
// hat outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using recursive setTimeout.

function printNumbers(from, to) {
  let current = from;
  let number = setInterval(() => {
    console.log(current);
    if (current < to) {
      current++;
    } else {
      clearInterval(number);
    }
  }, 1000);
}

// function printNumbers(from, to) {
//   let current = from;
//   let timerId = setTimeout(function run(){
//     console.log(current)
//     current++
//     if (current > to) {
//       clearTimeout(timerId);
//     } else {
//       setTimeout(run, 1000);
//     }
//   }, 1000)
// }

printNumbers(5, 10);
