var arr = [1, 2, 9, 16, 25];
let varOne = 0;
for (var index of arr) {
  if (index % 2 == 0) {
    varOne += index;
  }
}
console.log(varOne);
