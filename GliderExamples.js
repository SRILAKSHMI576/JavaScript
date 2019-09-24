// Trailing zeros in N factorial;
// step:1 find N! from 1 to N;
// step:2 Check how many times N! is divisible by 10

function TrailingZeros() {
  fact = 1;

  i = 5;
  for (let num = 1; num <= 10; num++) {
    fact = fact * num;
  }
  console.log(fact);
}
TrailingZeros();
