// function sumTo(n) {
//   if (n !== 1) {
//     return n + sumTo(n - 1);
//   } else {
//     return n;
//   }
// }

alert(sumTo(+prompt("Введите число", "100")));

function sumTo(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}
alert(sumTo(+prompt("Введите число", "100")));

// function sumTo(n) {
//   return ((1+n)/2) * n
// }

// alert(sumTo(+prompt("Введите число", "100")));
