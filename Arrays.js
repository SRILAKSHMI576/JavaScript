function arraySquare() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    console.log(arr[i] * arr[i]);
  }
}
// arraySquare();

function arrayDivisibleByThree() {
  var arr = [1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 21, 27];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    if (arr[i] % 3 == 0) {
      console.log(arr[i]);
    }
  }
}
// arrayDivisibleByThree();

function DivisibleByThreeFive() {
  var arr = [1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 21, 27];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      console.log(arr[i]);
    }
  }
}
// DivisibleByThreeFive();

function SumOfArray() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  n = arr.length - 1;
  sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
SumOfArray();
