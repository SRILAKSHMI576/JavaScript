function even(x) {
  return x % 2 == 0;
}

function arrayEven(arr) {
  return arr.filter(x => even(x));
}
console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function isLessthan(x, n) {
  return x < n;
}

function filterLessthan(arr, n) {
  return arr.filter(x => isLessthan(x, n));
}
console.log(filterLessthan([1, 2, 4, 8, 9, 34, 26], 10));

function addNum(x) {
  return x + 5;
}

function arrayMapping(arr) {
  return arr.map(x => addNum(x));
}

function evenNum(x) {
  return x % 2 == 0;
}

function filterArray(arr) {
  var newArr = arrayMapping(arr);
  return newArr.filter(x => evenNum(x));
}
console.log(filterArray([1, 2, 3, 4, 5]));
