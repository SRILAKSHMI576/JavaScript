function cubeOfNumber(n) {
  for (let number = 1; number <= n; number++) {
    cube = number * number * number;
    console.log(number + " and cube of the " + number + " is: " + cube);
  }
}
// cubeOfNumber(5);
// cubeOfNumber();

function MultiplicationTable(n) {
  for (let number = 1; number <= 10; number++) {
    console.log(n + " * " + number + " = " + n * number);
  }
}
// MultiplicationTable(2);
// MultiplicationTable(3);

function MultiplicationTables() {
  for (let number = 1; number <= 8; number++) {
    MultiplicationTable(1);
  }
}
//MultiplicationTables(8);

function oddNumbersAndSum(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("The sum is: " + sum);
}
//oddNumbersAndSum(20);

function lineTrianglePyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("*");
    }
    console.log();
  }
}
//lineTrianglePyramid(4);

function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    console.log();
  }
}
//numberPyramid(5);

function triangleNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i);
    }
    console.log();
  }
}
//triangleNumberPyramid(5);

function factorial(n) {
  fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
//factorial(5);

function evenNumbersAndSum(n) {
  sum = 0;
  for (let num = 1; num <= n; num++) {
    if (num % 2 == 0) {
      console.log(num);
      sum += num;
    }
  }
  console.log("sum is: " + sum);
}
//evenNumbersAndSum(20);

function SumOfNineNumbers(n) {
  sum = 0;
  value = 9;
  for (let num = 1; num <= n; num++) {
    sum += value;
    console.log(value);
    value = value * 10 + 9;
  }
  console.log("The sum is: " + sum);
}
//SumOfNineNumbers(5);

// function binaryPiramid(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       console.log("1");
//     }
//     console.log("");
//   }
// }
// binaryPiramid(5);

function squareNumberAndSum(n) {
  sum = 0;
  var square;
  for (let i = 1; i <= n; i++) {
    square = i * i;
    console.log(square);
    sum += square;
  }
  console.log("The sum of square: " + sum);
}
//squareNumberAndSum(5);

function sumOfSeries(n) {
  sum = 0;
  value = 1;
  for (let i = 1; i <= n; i++) {
    sum += value;
    console.log(value);
    value = value * 10 + 1;
  }
  console.log("The sum of series is: " + sum);
}
sumOfSeries(5);

function sumOfPerfectNumber() {
  sum = 0;
  for (let i = 1; i <= 28; i++) {
    if (28 % i == 0) {
      sum += i;
      console.log(i);
    }
  }
  if (sum == 56) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
//sumOfPerfectNumber();
