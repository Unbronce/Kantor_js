// Write the function camelize(str) that changes dash-separated
// words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

function camelize(str) {
  const snakeCased = str.split("-");
  let partOfArray = snakeCased.slice(1);

  let transform = partOfArray.map(
    item => (item = item[0].toUpperCase() + item.slice(1))
  );
  let newArr = snakeCased
    .slice(0, 1)
    .concat(transform)
    .join("");

  return newArr;
}

// function camelize(str) {
//   const snakeCased = str.split("-");

//   let transform = snakeCased.map((item, index) => {
//     if (index === 0) return item
//     return item = item[0].toUpperCase() + item.slice(1)
//   });
//   let newArr = transform.join("");

//   return newArr;
// }

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";
