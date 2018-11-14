// let x = prompt("x?", "");
// let n = prompt("n?", "");

// function pow(x, n) {
//   return x ** n;
// }

// alert(pow(x, n));

let x = prompt("x?", "");
let n = prompt("n?", "");

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result = result * x;
  }
  return result;
}

alert(pow(x, n));
