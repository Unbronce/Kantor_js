function aclean(arr) {
  let map = new Map();

  for (let strings of arr) {
    let separate = strings
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    console.log(map.set(separate, strings));
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
