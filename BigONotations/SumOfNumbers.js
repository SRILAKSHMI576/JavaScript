//1..

function addUpTo(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

var performance = process.hrtime();
var t1 = Date.now();
var result = addUpTo(1000000000);
console.log(result);
var t2 = process.hrtime();
console.log(t2, t1);
console.log(`Time Elapsed: ${t2 - t1} milli seconds.`);

//2..
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
//console.log(addUpTo(6));
