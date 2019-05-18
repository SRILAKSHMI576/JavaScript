var now = new Date();
var result = "The time and date is " + now;
console.log(result);

function firstReminder() {
  console.log("its been 5 seconds");
}
var timer = setTimeout(firstReminder, 5000);

var myTimer = 0;
function printTime() {
  console.log("The time and date is " + new Date());
  myTimer++;
  if (myTimer == 10) {
    clearInterval(timer);
    console.log("its been 10 seconds");
  }
}
var timer = setInterval(printTime, 1000);
