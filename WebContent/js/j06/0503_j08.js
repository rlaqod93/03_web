'use strict';

// 내장객체
// Number객체 생성
let num01 = new Number(10);
let num02 = 12;
console.log(`num01 + num02 = ${num01 + num02}`);

// toFixed
let num = 328.575;
console.log(`num.toFixed(1) = ${num.toFixed(1)}`);
console.log(`num.toFixed(2) = ${num.toFixed(2)}`); // 소수점 오차발생
console.log(`num.toFixed() = ${num.toFixed()}`);

// toString
num = 12;
console.log(`num.toString(2) = ${num.toString(2)}`);
console.log(`num.toString(16) = ${num.toString(16)}`);

