function greet(firstname, lastname, language) {
  language = language || "en";
  if (arguments.length === 0) {
    console.log();
  }
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log("--------------");
}

greet();
greet("Srilakshmi");
greet("john", "doe");
greet("john", "doe", "es");
