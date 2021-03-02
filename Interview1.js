function StringCount(str, word) {
  let count = 0;
  const n = str.length - 1;
  for (let index = 0; index <= n; index++) {
    if (str[index] === word) {
      count++;
    }
  }
  return count;
}

const str = "HELLOWORLD";
const counterObj = {};
for (let j = 0; j <= str.length - 1; j++) {
  const count = StringCount(str, str[j]);
  counterObj[str[j]] = count;
}

console.log(counterObj);
