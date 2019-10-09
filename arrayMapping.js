function double(x) {
  return 2 * x;
}

function arrayDouble(arr) {
  return arr.map(x => double(x));
}

console.log(arrayDouble([2, 4, 34, 5]));

function trible(y) {
  return 3 * y;
}

function arrayTrible(arr) {
  return arr.map(y => trible(y));
}
console.log(arrayTrible([1, 2, 3, 4, 5]));

function arrayAdding(arr) {
  return arr.map(x => {
    return x + 5;
  });
}
console.log(arrayAdding([1, 2, 3, 4, 5]));

function cubeOfArray(arr) {
  return arr.map(x => {
    return x * x * x;
  });
}

console.log(cubeOfArray([1, 1, 3]));
