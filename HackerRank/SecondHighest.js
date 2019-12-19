// function SecondHighest(arr) {
//   n = arr.length - 1;
//   arr.sort(sortNumber);
//   for (let i = 0; i <= n; i++) {
//     return arr[i];
//   }
// }

// const result = SecondHighest([2, 3, 6, 6, 15]);
// console.log(result);

// function sortNumber(a, b) {
//   return b - a;
// }

// function findIndexElement() {
//   let array = [23, 45, 3, 12, 778];
//   n = array.length - 1;
//   for (let index = 0; index <= n; index++) {
//     console.log(index + ", " + array[index]);
//   }
// }
// findIndexElement();

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

//console.log(users[1]);

function stringPattern() {
  let arr = ["sri", "srinu", "laxmi"];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    console.log("A message to " + arr[i]);
  }
}
stringPattern();

let names = "Bilbo, Gandalf, Nazgul";
let arr = names.split(", ");
for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}
