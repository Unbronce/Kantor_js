// function sumSalaries(obj) {
//   let result = 0;
//   for (let value of Object.values(obj)) {
//     result += value;
//   }
//   return result;
// }

function sumSalaries(obj) {
  return Object.values(obj).reduce((sum, salary) => sum + salary, 0);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

console.log(sumSalaries(salaries)); // 650
