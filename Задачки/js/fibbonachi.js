function fib(n) {
  if (n >= 2) {
    return fib(n - 1) + fib(n - 2);
  }
  return n;
}

alert(fib(+prompt("Введите число", "7")));
