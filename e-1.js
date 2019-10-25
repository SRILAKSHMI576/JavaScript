//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
const isDivisileBy3or5 = function(no) {
  const isDivisibleBy3 = no % 3 == 0;
  const isDivisibleBy5 = no % 5 == 0;

  return isDivisibleBy5 || isDivisibleBy3;
};

const sumOfDivisbleBy3Or5 = function(start, end) {
  let sum = 0;
  for (let no = start; no <= end; no++) {
    const divisiblity = isDivisileBy3or5(no);
    if (divisiblity === true) {
      sum += no;
    }
  }
  return sum;
};
const sum = sumOfDivisbleBy3Or5(1, 1000);
console.log(sum);
