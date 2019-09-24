sum = 0;
console.log("The first 10 natural number is: ");
for (let number = 1; number <= 10; number++) {
  console.log(number);
  sum += number;
}
console.log("The Sum is: " + sum);

sum = 0;
avg = 0;
console.log("The first 10 natural number is: ");
for (let number = 1; number <= 10; number++) {
  console.log(number);
  sum += number;
  avg = sum / 10;
}
console.log("The Sum is: " + sum);
console.log("The Average is: " + avg);
