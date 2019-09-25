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
// concatArrays([1, 3, 5], [2, 6, 8]);
// concatArrays([7, 8], [10, 9, 1, 1, 2], [7, 8, 10, 9, 1, 1, 2]);
// concatArrays([4, 5, 1], [3, 3, 3, 3, 3]);

//6..Check if an Array Contains a Given Number
function checkNumber(arr, el) {
  if (arr.includes(el)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
// checkNumber([1, 2, 3, 4, 5], 3);
// checkNumber([1, 1, 2, 1, 1], 3);
// checkNumber([5, 5, 5, 6], 5);
// checkNumber([], 5);

//7....Return the First and Last Elements in an Array
function firstLast(arr) {
  console.log([arr[0], arr[arr.length - 1]]);
}
// firstLast([5, 10, 15, 20, 25]);
// firstLast(["edabit", 13, null, false, true]);
// firstLast([undefined, 4, "6", "hello", null]);

//8... difference between the largest and smallest integers in the array
function differenceElements(arr) {
  console.log(Math.max(...arr) - Math.min(...arr));
}
// differenceElements([10, 15, 20, 2, 10, 6]);
// differenceElements([-3, 4, -9, -1, -2, 15]);

//9....Checking Even Numbers
function checkAllEven(arr) {
  console.log(arr.every(x => x % 2 === 0));
}
checkAllEven([1, 2, 3, 4]);
checkAllEven([2, 4, 6]);
checkAllEven([5, 6, 8, 10]);
checkAllEven([-2, 2, -2, 2]);
