function BasicArray() {
  arr1 = ["a", "e", "i", "o", "u"];
  console.log(arr1[0]);
  arr1[0] = "s";
  console.log(arr1);
  console.log(arr1.length);
  console.log(arr1.sort()); // Alphabet order
  console.log(arr1[arr1.length - 1]);
}
BasicArray();
