function maxSum(arr) {
  sum = 0;
  n = arr.length - 1;
  arr.sort(sortNumber);
  for (let i = 1; i <= n; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const result4 = maxSum([1, 3, 5, 7, 9]);
console.log(result4);

function minSum(arr) {
  n = arr.length - 1;
  arr.sort(sortNumber);
  sum = 0;
  for (let i = 0; i <= n - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const result5 = minSum([1, 3, 9, 7, 5]);
console.log(result5);

function sortNumber(a, b) {
  return b - a;
}
