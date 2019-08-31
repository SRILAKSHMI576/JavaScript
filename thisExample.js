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

var c = {
  name: "The c object",
  log: function() {
    console.log(this);

    var setname = function(newname) {
      this.name = newname;
    };
    setname("Update again! The c object");
    console.log(this);
  }
};

c.log();
