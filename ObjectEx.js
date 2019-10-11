var person = new Object();

person["firstname"] = "Sri";
person["lastname"] = "Laxmi";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "Ny";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

var Tony = {
    firstname: "Tony",
    lastname: "Alicea",
    address: {
      street: "111 Main St.",
      city: "New York",
      state: "NY"
    }
  };
  
  function greet(person) {
    console.log("Hi " + person.firstname);
  }
  
  greet(Tony);
  
  greet({
    firstname: "Mary",
    lastname: "Doe"
  });
  
  Tony.address2 = {
    street: "333 Second St."
  };
  