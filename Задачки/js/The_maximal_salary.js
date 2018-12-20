// There is a salaries object:
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary(obj) {
  let result = 0;
  let topPaidPerson = null;
  for (let person of Object.entries(obj)) {
    let [name, salary] = person;
    if (salary > result) {
      result = salary;
      topPaidPerson = name;
    }
  }
  return topPaidPerson;
}

console.log(topSalary(salaries));
