var arr = [1, 1, 2, 3, 5, 8, 13, 21];
var sum = 0;
for (var index in arr) {
  sum += arr[index];
}
console.log(sum);
