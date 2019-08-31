var objectLiteral = {
  firstname: "Mary",
  isProgrammer: true
};
console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary", "lastname": true}');
console.log(jsonValue);

function log(a) {
  a();
}
log(function() {
  console.log("hi");
});
