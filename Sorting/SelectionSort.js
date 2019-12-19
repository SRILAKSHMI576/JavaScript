function SelectionSort() {
  const arr = [23, 78, 45, 8, 32, 56];
  n = arr.length;
  for (let index = 0; index < n; index++) {
    let min = index;
    for (let j = index + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== index) {
      let temp = arr[index];
      arr[index] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(SelectionSort());
