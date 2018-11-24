function readNumber() {
  while (true) {
    let num = prompt("Enter a number please?", "0");
    if (num === null) {
      alert("Read: " + num);
      return num;
    } else if (num === "") {
      alert("Read: " + null);
      return null;
    } else if (isFinite(num)) {
      num = Number(num);
      alert("Read: " + num);
      return num;
    }
  }
}

readNumber();
