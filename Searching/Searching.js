function UnsortedData(num) {
  const arr = [34, 67, 2, 34, 10];
  n = arr.length - 1;
  for (let index = 0; index <= n; index++) {
    if (arr[index] === num) {
      return index;
    }
  }
  return -1;
}

//console.log(UnsortedData(10));

function UnsortedString(str) {
  const arr = ["sri", "kranth", "john", "max", "auntony"];
  n = arr.length - 1;
  for (let index = 0; index <= n; index++) {
    if (arr[index] === str) {
      return index;
    }
  }
  return -1;
}

// console.log(UnsortedString("john"));
// console.log(UnsortedString("auntony"));
// console.log(UnsortedString("abcd"));

function UnsortedObject(obj) {
  const object = [
    { name: "sri", age: 66 },
    { name: "john", age: 45 },
    { name: "john", age: 12 },
    { name: "max", age: 87 },
    { name: "auntony", age: 19 }
  ];

  n = object.length - 1;
  for (let index = 0; index <= n; index++) {
    if (object[index].name === obj.name && object[index].age === obj.age) {
      return index;
    }
  }
  return -1;
}

//console.log(UnsortedObject({ name: "john", age: 45 }));

function binarySearch(num) {
  const arr = [1, 2, 8, 19, 56];
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(8));
