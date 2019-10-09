function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function sumOf(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

arr = [1, 2, 3, 4, 5];

const filterdArray = arr.filter(x => x === 3);
// function test() {
//   const x = add(2, 4);
//   const y = sub(2, 4);
//   console.log(x);
//   console.log(y);
// }

// test();
console.log(filterdArray.length == 0);

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
const adding = [...arr1, ...arr2];
console.log(adding);

const x = [1, 2, 45];
const y = [];
x.forEach(element => {
  y.push(element);
});
console.log(y);

function removeElement() {
  var arr = [1, 2, 3, 4, 5, 6, 7];
  var y = [];
  var n = arr.length - 1;
  for (let index = 0; index <= n; index++) {
    if (index != 3 && index != 5) {
      y.push(arr[index]);
    }
  }
  console.log(y);
}
removeElement();

function filterRemoveElement(arr) {
  return arr.filter(function(element, index) {
    return index !== 4;
  });
}

console.log(filterRemoveElement([4, 45, 3, 5, 3, 2, 5]));

function squareElement(arr) {
  return arr.map(function(element, index) {
    if (index != 3) {
      return element * element;
    } else {
      return element;
    }
  });
}

function arraySlice(arr, a, b) {
  return arr.filter(function(element, index) {
    if (a <= index && b <= index) {
      return true;
    } else {
      return false;
    }
  });
}
const result = arraySlice([12, 67, 4, 78, 55, 34, 8, 12], 2, 5);
console.log(result);
// console.log(squareElement([4, 45, 3, 5, 3, 2, 5]));
