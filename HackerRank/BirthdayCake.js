function maxSum(arr) {
  max = arr[0];
  n = arr.length - 1;
  arr.sort(sortNumber);
  max = arr[arr.length - 1];
  return arr.filter(element => element === max).length;
}

const result4 = maxSum([3, 2, 1, 3]);
console.log(result4);

function sortNumber(a, b) {
  return a - b;
}
