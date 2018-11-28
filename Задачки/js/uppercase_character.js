// Write a function ucFirst(str) that returns the
// string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

function ucFirst(str) {
  const toUpperCase = str;
  let result = "";
  for (let i = 0; i < toUpperCase.length; i++) {
    if (i === 0) {
      result = result + toUpperCase[0].toUpperCase();
    } else {
      result = result + toUpperCase[i];
    }
  }
  return result;
}

ucFirst("john");
