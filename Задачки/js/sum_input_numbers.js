function sumInput() {
  const arr = [];
  let result = 0;
  while (true) {
    let value = prompt("A number please?", "0");
    if (!isFinite(value) || value === null || value === "") break;
    value = Number(value);
    arr.push(value);
  }
  for (let key of arr) {
    result += key;
  }
  alert("Sum of input values = " + result);
  return result;
}

sumInput();
