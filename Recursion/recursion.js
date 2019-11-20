function add(a, b) {
  if (b == 0) {
    // base condtion. means its stop conitnuous loop
    return;
  }
  console.log(a + b);
  add(a, b - 1); // recursive call
}

//const addition = add(3, 4);
//console.log(addition);

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
for (i = 1; i <= 5; i++) {
  const result = factorial(i);
  console.log(result);
}

// for (let i = 1; i <= 10; i++) {
//   const result = factorial(i);
//   console.log(result);
// }

function fib(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// for (let i = 1; i <= 10; i++) {
//   const result = fib(i);
//   console.log(result);
// }

function SumOfAllDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + Math.floor(SumOfAllDigits(num / 10));
}

// const result = SumOfAllDigits(213);
// console.log(result);

function EvenOrOdd(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
for (let i = 1; i <= 5; i++) {
  const result = EvenOrOdd(i);
  console.log(result);
}
