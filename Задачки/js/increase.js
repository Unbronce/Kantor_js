let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (key in obj) {
    if (obj[key] === String(obj[key])) continue;
    obj[key] = obj[key] * 2;
  }
}

multiplyNumeric();
console.log(menu);
console.log(menu);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") obj[key] *= 2;
//   }
// }
