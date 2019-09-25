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
// getLastElement([1, 2, 3]);
// getLastElement(["Cat", "dog", "duck"]);
// getLastElement([true, false, true]);

//5.. Concatenating two integer arrays
function concatArrays(arr1, arr2) {
  console.log(arr1.concat(arr2));
}
concatArrays([1, 3, 5], [2, 6, 8]);
concatArrays([7, 8], [10, 9, 1, 1, 2], [7, 8, 10, 9, 1, 1, 2]);
concatArrays([4, 5, 1], [3, 3, 3, 3, 3]);
