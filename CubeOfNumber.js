// function cubeOfNumber() {
//   for (let number = 1; number <= 5; number++) {
//     cube = number * number * number;
//     console.log(number + " and cube of the " + number + " is: " + cube);
//   }
// }
// cubeOfNumber();

// function MultiplicationTable() {
//   for (let number = 1; number <= 10; number++) {
//     console.log("15 * " + number + " = " + 15 * number);
//   }
// }
// MultiplicationTable();

// function MultiplicationTables() {
//   for (let number = 1; number <= 8; number++) {
//     for (let num = 1; num <= 10; num++) {
//       console.log(number + " * " + num + " = " + number * num);
//     }
//   }
// }
// MultiplicationTables();

// function oddNumbersAndSum() {
//   sum = 0;
//   for (let i = 1; i <= 20; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
//   console.log("The sum is: " + sum);
// }
// oddNumbersAndSum();

// function lineTrianglePyramid() {
//   for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//       console.log("*");
//     }
//     console.log();
//   }
// }
// lineTrianglePyramid();

// function numberPyramid() {
//   for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//       console.log(j);
//     }
//     console.log();
//   }
// }
// numberPyramid();

// function triangleNumberPyramid() {
//   for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//       console.log(i);
//     }
//     console.log();
//   }
// }
// triangleNumberPyramid();

function factorial() {
  fact = 1;
  for (let i = 1; i <= 5; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial();
