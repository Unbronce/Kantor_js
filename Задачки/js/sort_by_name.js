// Write the function sortByName(users) that
// gets an array of objects with property name and sorts it.

// For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

function sortByName(users) {
  users.sort(function(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}

sortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name); // Mary
