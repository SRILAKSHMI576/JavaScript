function isPrime(n) {
  for (let i = 2; i <= n - 1; i++) {
    const reminder = n % i;
    if (reminder == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(27));
sum = 0;
for (let i = 1; i <= 100; i++) {
  const result = isPrime(i);
  if (result == true) {
    sum += i;
  }
}
console.log(sum);
