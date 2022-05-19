// let 변수 추가
// ECMA SCRIPT 2015(ES6)에서 추가

let num = 11;
// let num = 13;

console.log("num : " + num);
// Uncaught SyntaxError: Identifier 'num' has already been declared

console.log(text);
text = "Hoisting";
let text;
// Uncaught ReferenceError: Cannot access 'text' before initialization