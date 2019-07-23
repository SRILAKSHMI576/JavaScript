function SmallNumber(num) {
  result = Math.min(...num);
  console.log(result);
}
SmallNumber([34, 15, 88, 2]);
SmallNumber([34, -345, -1, 100]);
SmallNumber([-76, 1.345, 1, 0]);
SmallNumber([0.4356, 0.8795, 0.5435, -0.9999]);
SmallNumber([7, 7, 7]);
