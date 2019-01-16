function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
makeWorker();
// work(); // what will it show? "Pete" (name where created) or "John" (name where called)?
