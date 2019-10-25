function countElement(name) {
  const obj = {};
  for (let i = 0; i < name.length; i++) {
    const letter = name[i];
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] = obj[letter] + 1;
    }
  }
  return obj;
}
console.log(countElement("elephant"));
