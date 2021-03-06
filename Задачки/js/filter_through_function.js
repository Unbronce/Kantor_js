let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function(value) {
    if (value < a || value > b) {
      return false;
    }
    return true;
  };
}

function inArray(arr) {
  return function(value) {
    if (arr.includes(value)) {
      return true;
    }
    return false;
  };
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
