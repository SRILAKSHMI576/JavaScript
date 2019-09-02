function greet(firstname, lastname, language) {
  language = language || "en";
  if (language === "en") {
    console.log("helo " + firstname + " " + lastname);
  }
  if (language === "es") {
    console.log("Hola " + firstname + " " + lastname);
  }
}

greet("sri", "lakshmi", "en");
greet("sri", "lakshmi", "es");
