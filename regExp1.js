//1...... var textCont = /Hello/;
// var str = "Hello world";
// var result = textCont.test(str);
// console.log(result);

//2.... var textCont = /Hello/;
// var str = "Hello world";
// var result = textCont.exec(str);
// console.log(result);

//3....var srt = /Hello/;
// console.log(srt.test("Hello world"));
// var regexGlobal = /abc/g;
// console.log(regexGlobal.test("abc abc"));

//4.... var regexGlobal = /abc/i;
// console.log(regexGlobal.test("Abc abc"));

//5.... var regex = /[bt]ear/;
// console.log(regex.test("tear"));
// console.log(regex.test("bear"));
// console.log(regex.test("fear"));
//6.... var regex = /[^bt]ear/;
// console.log(regex.test("tear"));
// console.log(regex.test("bear"));
// console.log(regex.test("fear"));

//7.... var regex = /[a-z]ear/;
// console.log(regex.test("tear"));
// console.log(regex.test("bear"));
// console.log(regex.test("fear"));

// 8....var regex = /\d+/;
// console.log(regex.test("8"));
// console.log(regex.test("8888889"));
//  console.log(regex.test("88923423"));

// 9....var regex = /go*d/;
// console.log(regex.test("gd"));
// console.log(regex.test("god"));
// console.log(regex.test("good"));
// console.log(regex.test("goood"));

//10.... var regex = /goo?d/;
// console.log(regex.test("god"));
// console.log(regex.test("good"));
// console.log(regex.test("goood"));

//11.... var regex = /^g/;
// console.log(regex.test("good"));
// console.log(regex.test("bed"));
// console.log(regex.test("tag"));

//12....var regex = /.com$/;
// console.log(regex.test("test@testmail.com"));
// console.log(regex.test("test@testmail"));

//13.... var regex = /go{2}d/;
// console.log(regex.test("good"));
// console.log(regex.test("god"));

//14... var regex = /go{2,}d/;
// console.log(regex.test("good"));
// console.log(regex.test("goood"));
// console.log(regex.test("goood"));

//15... var regex = /go{1,2}d/;
// console.log(regex.test("good"));
// console.log(regex.test("god"));
// console.log(regex.test("goood"));

//16.... var regex = /(green|red) apple/;
// console.log(regex.test("green apple"));
// console.log(regex.test("red apple"));
// console.log(regex.test("violet apple"));

//17.... this is wrong var regex = /a+b/;
// var regex = /a\+b/;
// console.log(regex.test("a+b"));

//18... var regex = /(foo)bar\1/;
// console.log(regex.test("foobarfoo"));
// console.log(regex.test("foobar"));

//19... var regex = /(?:foo)bar\1/;
// console.log(regex.test("foobarfoo"));
// console.log(regex.test("foobar"));
// console.log(regex.test("foobar\1"));
// var regex = /Red(?:Apple)/;
// console.log(regex.test("RedApple"));

//20....  match 10 digits;
// var regex = /^\d{10}$/;
// console.log(regex.test("9994564656"));

// 21.... match the date
// var regex = /^(\d{1,2}-){2}(\d{2})?$/;
// console.log(regex.test("01-01-1990"));
// console.log(regex.test("01-01-90"));
// console.log(regex.test("01-01-990"));

//22...... Matching Anything But a Newline
var regex = /^(.{3}\.){3}.{3}$/;
console.log(regex.test("123.456.abc.def"));
console.log(regex.test("1235.456.abc.def"));
console.log(regex.test("mnb.fgh.abc.def"));
