function factorial(n) {
  if (n !== 1) {
    return n * factorial(n - 1);
  }
  return n;
}

alert(factorial(+prompt("Введите число", "100")));
