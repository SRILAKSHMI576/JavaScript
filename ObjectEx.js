var person = {
    "firstname": "sri",
    "lastname": "laxmi",
}
 
person.firstname = "ram"

//console.log(person.firstname);
//console.log(person.lastname);


//console.log(person.firstname);
//console.log(person.lastname);

// person.address = new Object();
// person.address.street = "111 Main St.";
// person.address.city = "New York";
// person.address.state = "Ny";

// // console.log(person.address.street);
// // console.log(person.address.city);
// // console.log(person["address"]["state"]);

// var Tony = {
//     firstname: "Tony",
//     lastname: "Alicea",
//     address: {
//       street: "111 Main St.",
//       city: "New York",
//       state: "NY"
//     }
//   };
  
//   function greet(person) {
//     console.log("Hi " + person.firstname);
//   }
  
//   greet(Tony);
  
//   greet({
//     firstname: "Mary",
//     lastname: "Doe"
//   });
  
//   Tony.address2 = {
//     street: "333 Second St."
//   };
  
// var greet ="Hello!";
// var greet = "HOla!"

// console.log(greet)

// var english = {};
// var spanish = {};

// english.greet = "Hello";
// spanish.greet = "Hola";

// console.log(english);
// console.log(spanish)


var student_Details = {
    "name": "hari",
    "Id": "N11034522"
}
student_Details.Id = "N454566542"

//console.log(student_Details)
//console.log(student_Details.Id)


var student_Information = {
    name: {
        firstName: "sri",
        lastName: "laxmi"
    },
    age: "30",
    address: {
        pincode: "521302",
        state: "Andhra Pradesh",
        house_No: "5-202"
    }
}

student_Information.address.pincode = "234536"

//console.log(student_Information)
//console.log(student_Information.name.firstName + " " +student_Information.name.lastName)
console.log(student_Information.address.pincode)