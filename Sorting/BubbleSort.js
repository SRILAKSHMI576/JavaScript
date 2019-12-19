function BubbleSort() {
  const arr = [21, 34, 9, 12, 55, 11, 5, 1];
  n = arr.length - 1;
  for (let index = 0; index < n; index++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(BubbleSort());
