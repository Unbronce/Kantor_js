// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let user = {
  name: "John Smith",
  age: 35
};

// let fromJSON = JSON.parse(JSON.stringify(user));

user = JSON.stringify(user);
const fromJSON = JSON.parse(user);
