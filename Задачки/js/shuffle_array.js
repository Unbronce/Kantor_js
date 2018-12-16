// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// function shuffle(array) {
//     array.sort(function(a, b) {
//     if (Math.random(a) > Math.random(b)) {
//       return -1;
//     }
//     if (Math.random(a) < Math.random(b)) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log(array)
// }

function shuffle(array) {
  array.sort((a, b) => {
    if (Math.random(a) > Math.random(b)) {
      return -1;
    }
    if (Math.random(a) < Math.random(b)) {
      return 1;
    }
    return 0;
  });
  console.log(array);
}
let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
