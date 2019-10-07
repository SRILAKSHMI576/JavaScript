//1....
function NaturalNumbers(n) {
  for (let number = 1; number <= n; number++) {
    console.log(number);
  }
}
//NaturalNumbers(10);

//2...
function SumOfTenNaturalNumbers() {
  sum = 0;
  console.log("The first 10 natural number is: ");
  for (let number = 1; number <= 10; number++) {
    console.log(number);
    sum += number;
  }
  console.log("The Sum is: " + sum);
}
//SumOfTenNaturalNumbers();

//3....
function SumOfNaturalNumbers(n) {
  sum = 0;
  console.log("The first " + n + " natural number is: ");
  for (let number = 1; number <= n; number++) {
    console.log(number);
    sum += number;
  }
  console.log("The Sum of Natural Number upto " + n + " terms: " + sum);
}
//SumOfNaturalNumbers(7);

//4...
function SumAndAvgOfNaturalNumbers(n) {
  sum = 0;
  avg = 0;
  console.log("The first " + n + " natural number is: ");
  for (let number = 1; number <= n; number++) {
    console.log(number);
    sum += number;
    avg = sum / 10;
  }
  console.log("The Sum is: " + sum);
  console.log("The Average is: " + avg);
}
//SumAndAvgOfNaturalNumbers(10);

//5.....
function cubeOfNumber(n) {
  for (let number = 1; number <= n; number++) {
    cube = number * number * number;
    console.log(number + " and cube of the " + number + " is: " + cube);
  }
}
// cubeOfNumber(5);
// cubeOfNumber();

//6....
function MultiplicationTable(n) {
  for (let number = 1; number <= 10; number++) {
    console.log(n + " * " + number + " = " + n * number);
  }
}
// MultiplicationTable(2);
// MultiplicationTable(3);

//7...
function MultiplicationTables() {
  for (let number = 1; number <= 8; number++) {
    MultiplicationTable(1);
  }
}
//MultiplicationTables(8);

//8...
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

//9...
function lineTrianglePyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("* ");
    }
    console.log();
  }
}
// lineTrianglePyramid(4);

//10....
function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    console.log();
  }
}
// numberPyramid(5);

//11....
function triangleNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i);
    }
    console.log();
  }
}
//triangleNumberPyramid(5);

//12...
function TriangleNaturalNumberPyramid(n) {
  k = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      k = k + 1;
      console.log(k);
    }
    console.log();
  }
}
//TriangleNaturalNumberPyramid(4);

//13...
function NaturalNumberPyramid(n) {
  k = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      k = k + 1;
      console.log(k);
    }
    console.log();
  }
}
//NaturalNumberPyramid(4);

//14...
function PyramidAsterisk(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("*");
    }
    console.log();
  }
}
//PyramidAsterisk(4);

//15....
function factorial(n) {
  fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
//factorial(5);

//16...
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

///17..
function RepeatNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i);
    }
    console.log();
  }
}
//RepeatNumberPyramid(4);

//19....
function HarmonicSeries(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    k = 1 / parseInt(i);
    console.log(k);
    sum += k;
  }
  console.log(sum);
}
//HarmonicSeries(5);

//20.... RightAnglePiramid
function rightAnglePyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        console.log("*");
      } else {
        console.log(" ");
      }
    }
    console.log();
  }
}
// rightAnglePyramid(3);

//21....
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

//22.. Binary Right angle pyramid
function binaryPiramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        console.log("1");
      } else {
        console.log("0");
      }
    }
    console.log("");
  }
}
// binaryPiramid(5);

//25....
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
// squareNumberAndSum(5);

//26.....
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
//sumOfSeries(5);

//27...Perfect number or not
function sumOfPerfectNumber(n) {
  sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
      console.log(i);
    }
  }
  if (sum == n) {
    console.log("Perfect Number");
  } else {
    console.log("Not Perfect Number");
  }
}
// sumOfPerfectNumber(56);

//28...Perfect number range
function sumOfPerfectNumber(n) {
  for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        sum += j;
      }
    }
    if (sum == i) {
      console.log(i);
    }
  }
}
// sumOfPerfectNumber(50);
