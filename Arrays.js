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
// SumOfArray();

function findElement() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    if (15 == arr[i]) {
      console.log("index of Element: ", arr.indexOf(arr[i]));
    } else {
      console.log("-1");
    }
  }
}
//findElement();

function findElementInArray() {
  var arr = [1, 2, 34, 5, 6, 7, 8, 3];
  console.log(arr.indexOf(1));
}
// findElementInArray();

// function minElement() {
//   var arr = [11, 23, 56, 2, 8, 22, 998, 5, 77];
//   n = arr.length - 1;
//   for (let i = 0; i <= n; i++) {}
// }
// minElement();

function avgNumbers() {
  var arr = [1, 3, 5, 7, 9];
  sum = 0;
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  console.log(avg);
}
avgNumbers();
