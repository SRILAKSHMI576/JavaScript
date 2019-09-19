function cubeOfNumber() {
  for (let number = 1; number <= 5; number++) {
    cube = number * number * number;
    console.log(number + " and cube of the " + number + " is: " + cube);
  }
}
cubeOfNumber();

function MultiplicationTable() {
  for (let number = 1; number <= 10; number++) {
    console.log("15 * " + number + " = " + 15 * number);
  }
}
MultiplicationTable();

function MultiplicationTables() {
  for (let number = 1; number <= 8; number++) {
    for (let num = 1; num <= 10; num++) {
      console.log(number + " * " + num + " = " + number * num);
    }
  }
}
MultiplicationTables();
