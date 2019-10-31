function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("bye");
}
//countUpAndDown(5);

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printAllPairs(2);
