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
// checkAllEven([1, 2, 3, 4]);
// checkAllEven([2, 4, 6]);
// checkAllEven([5, 6, 8, 10]);
// checkAllEven([-2, 2, -2, 2]);

//10....Exists a Number Higher?
function existsHigher(arr, n) {
  console.log(Math.max(...arr) >= n);
}
// existsHigher([5, 3, 15, 22, 4], 10);
// existsHigher([1, 2, 3, 4, 5], 8);
// existsHigher([4, 3, 3, 3, 2, 2, 2], 4);
// existsHigher([], 5);

//11....Remove Null from an Array
function removeNull(arr) {
  console.log(arr.filter(word => word != null));
}
// removeNull(["a", null, "b", null]);
// removeNull([null, null, null, null, null]);
// removeNull([7, 8, null, 9]);

//12....Additive Inverse
function additiveInverse(arr) {
  console.log(arr.map(num => -num));
}
// additiveInverse([5, -7, 8, 3]);
// additiveInverse([1, 1, 1, 1, 1]);
// additiveInverse([-5, -25, -35]);

//13....State Names and Abbreviations
function filterStateNames(arr, type) {
  console.log(arr.filter(e => (type === "abb" ? e.length < 3 : e.length > 2)));
}
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb");
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full");
// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb");
// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full");

//14....Eliminate Odd Numbers within an Array
function noOdds(arr) {
  console.log(arr.filter(e => e % 2 == 0));
}
// noOdds([1, 2, 3, 4, 5, 6, 7, 8]);
// noOdds([43, 65, 23, 89, 53, 9, 6]);
// noOdds([718, 991, 449, 644, 380, 440]);

//15....Find the Smallest and Biggest Numbers
function minMax(arr) {
  console.log([Math.min(...arr), Math.max(...arr)]);
}
// minMax([1, 2, 3, 4, 5]);
// minMax([2334454, 5]);
// minMax([1]);

//16....Write a function that returns true if two rooks can attack each other, and false otherwise.
function canCapture([yourRook, opponentsRook]) {
  if (
    yourRook.charAt(0) === opponentsRook.charAt(0) ||
    yourRook.charAt(1) === opponentsRook.charAt(1)
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
// canCapture(["A8", "E8"]);
// canCapture(["A1", "B2"]);
// canCapture(["H4", "H3"]);
// canCapture(["F5", "C8"]);

//17...Next Element in Arithmetic Sequence
function nextElement(arr) {
  result = arr[1] - arr[0];
  output = arr[arr.length - 1] + result;
  console.log(output);
}
// nextElement([3, 5, 7, 9]);
// nextElement([-5, -6, -7]);
// nextElement([2, 2, 2, 2, 2]);

//18...Reverse Coding Challenge
function mysteryFunc(arr, num) {
  console.log(arr.map(e => e % num));
}
// mysteryFunc([5, 7, 8, 2, 1], 2);
// mysteryFunc([9, 8, 16, 47], 4);
// mysteryFunc([17, 11, 99, 55, 23, 1], 5);
// mysteryFunc([6, 1], 7);
// mysteryFunc([3, 2, 9], 3);
// mysteryFunc([48, 22, 0, 19, 33, 100], 10);

//19.. Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
function notDivisibleBy13(nums) {
  console.log(nums.filter(e => e % 13 != 0));
}
// notDivisibleBy13([53, 182, 435, 591, 637]);
// notDivisibleBy13([24, 316, 393, 458, 1279]);
// notDivisibleBy13([104, 351, 455, 806, 871]);

//20... Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
function transform(arr) {
  console.log(arr.map(e => (e % 2 == 0 ? (e -= 1) : (e += 1))));
}
// transform([1, 2, 3, 4, 5]);
// transform([3, 3, 4, 3]);
// transform([2, 2, 0, 8, 10]);

//21...Create a function to calculate the determinant of a 2 x 2 matrix. The determinant of the following matrix is: ad - bc:
function calcDeterminant(matrix) {
  reverseMatrix = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  console.log(reverseMatrix);
}
// calcDeterminant([[1, 2], [3, 4]]);
// calcDeterminant([[5, 3], [3, 1]]);
// calcDeterminant([[1, 1], [1, 1]]);

//22...Typing game
function correctStream(user, correct) {
  console.log(user.map((word, index) => (correct[index] == word ? 1 : -1)));
}
// correctStream(["it", "is", "find"], ["it", "is", "fine"]);
// correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// );

//23...Generate a Countdown of Numbers in an Array
function countDown(start) {
  var arr = [];
  for (let i = start; i >= 0; i--) {
    arr.push(i);
  }
  console.log(arr);
}
// countDown(5);
// countDown(1);
// countDown(0);

//24...: Filtering out Empty Arrays
function removeEmptyArrays(arr) {
  console.log(arr.filter(x => x != false));
}
// removeEmptyArrays(["a", "b", []]);
// removeEmptyArrays([1, 2, [], 4]);

//25... Comparing Arrays
function checkEquals(arr1, arr2) {
  if (arr1.join() === arr2.join()) {
    console.log("true");
  } else {
    console.log("false");
  }
}
// checkEquals([1, 2], [1, 3]);
// checkEquals([1, 2], [1, 2]);
// checkEquals([4, 5, 6], [4, 5, 6]);
// checkEquals([4, 7, 6], [4, 5, 6]);
// checkEquals([1, 12], [11, 2]);

//26...Filter by Digit Length
function filterDigitLength(arr, num) {
  console.log(arr.filter(numbers => numbers.toString().length == num));
}
filterDigitLength([88, 232, 4, 9721, 555], 3);
filterDigitLength([2, 7, 8, 9, 1012], 1);
filterDigitLength([32, 88, 74, 91, 300, 4050], 1);
filterDigitLength([5, 6, 8, 9], 1);
