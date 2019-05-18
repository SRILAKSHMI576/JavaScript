var now = new Date();

var result = "The date and time is " + now;
console.log(result);

function reminder() {
  console.log("its been 5 seconds");
}
var timer = setTimeout(reminder, 5000);

var myTimer = 0;
function printTime() {
  console.log("The date and time is  " + new Date());

  myTimer++;
  if (myTimer == 10) {
    clearInterval(timer);
    console.log("its been a 10 seconds");
  }
}
var timer = setInterval(printTime, 1000);
