let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

const sum = salaries => {
  let result = 0;
  for (key in salaries) {
    if (salaries.hasOwnProperty(key)) {
      result += salaries[key];
    } else {
      return 0;
    }
  }
  return result;
};

alert(sum(salaries));
