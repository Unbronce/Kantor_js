// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));
// readMap.set(messages[1], new Date(2017, 1, 1));

// console.log(readMap);
// messages.shift();

// console.log("map", readMap);
// console.log("sms", messages)

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];

// let readMessages = new WeakSet();

// // two messages have been read
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// readMessages.add(messages[2]);
// // readMessages has 2 elements

// // ...let's read the first message again!
// readMessages.add(messages[0]);
// // readMessages still has 2 unique elements

// // answer: was the message[0] read?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// console.log(readMessages);
// console.log(messages);

// // now readMessages has 1 element (technically memory may be cleaned later);

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// fill it with array elements (3 items)
let unreadSet = new WeakSet(messages);

// use unreadSet to see whether a message is unread
console.log(unreadSet.has(messages[1])); // true

// remove it from the set after reading
// unreadSet.delete(messages[1]); // true

// and when we shift our messages history, the set is cleaned up automatically
messages.shift();
console.log(messages);
console.log(unreadSet);
