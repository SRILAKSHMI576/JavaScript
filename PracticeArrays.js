// 1...Return the first element in an array
function getFirstValue(arr) {
  console.log(arr[0]);
}
// getFirstValue([1, 2, 3]);
// getFirstValue([80, 5, 100]);
// getFirstValue([-500, 0, 50]);

//2...Reverse an Array

function reverseArray(arr) {
  console.log(arr.reverse());
}
// reverseArray([1, 2, 3, 4]);
// reverseArray([9, 9, 2, 3, 4]);
// reverseArray([]);

//3...Find the index of element
function indexOfElement(arr, item) {
  console.log(arr.indexOf(item));
}
// indexOfElement([1, 5, 3], 5);
// indexOfElement([9, 8, 3], 3);
// indexOfElement([1, 2, 3], 4);

//4...Return the last element in an array
function getLastElement(arr) {
  console.log(arr[arr.length - 1]);
}
getLastElement([1, 2, 3]);
getLastElement(["Cat", "dog", "duck"]);
getLastElement([true, false, true]);
