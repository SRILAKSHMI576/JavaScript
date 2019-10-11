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

function minElement() {
  var arr = [11, 23, 56, 2, 8, 22, 998, 5, 77];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    minimum = arr[0];
    for (i = 1; i <= n; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
        console.log(minimum);
      }
    }
  }
}
//minElement();

function avgNumbers() {
  var arr = [12, 35, 57, 79, 29];
  sum = 0;
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  console.log(avg);
}
// avgNumbers();

function maxElement() {
  var arr = [11, 23, 56, 2, 8, 22, 998, 5, 77];
  n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    maximum = arr[0];
    for (i = 1; i <= n; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
        console.log(maximum);
      }
    }
  }
}
// maxElement();

function filterDivisibleByTen(arr) {
  return arr.filter(function(element) {
    return element % 10 == 0;
  });
}
// console.log(filterDivisibleByTen([10, 20, 56, 45, 35, 67, 89, 40]));

function multiplyByTen(arr) {
  return arr.map(function(element) {
    return element * 10;
  });
}
// console.log(multiplyByTen([4, 45, 3, 5, 3, 2, 5]));

function sumOfSquares(arr) {
  sum = 0;
  const allSquaresOfSum = arr.map(function(element) {
    return element * element;
  });
   n = allSquaresOfSum.length-1;
   for(let index = 0; index <= n ;index++){
     sum += allSquaresOfSum[index]
   }
   return sum;
}
//console.log(sumOfSquares([1, 2, 3]));

function lengthOfString(arr) {
  return arr.map(function(element) {
    return element.length;
  });
}
//console.log(lengthOfString(["Ram", "Hari", "Sri", "Srinu", "Srilaxmi", "Abc"]));

function filterElements(arr){
  return arr.filter(function(element){
    return element.startsWith("Sri")
  })
}
console.log(filterElements(["Ram", "Hari", "Sri", "Srinu", "Srilaxmi", "Abc"]))