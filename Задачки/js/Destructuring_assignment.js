let user = {
  name: "John",
  years: 30
};

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
