function a() {
  console.log(this);
  this.newvariable = "Hello";
}

var b = function() {
  console.log(this);
};
a();
console.log(newvariable);
b();
