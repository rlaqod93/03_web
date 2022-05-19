'use strict';

// 논리연산자
let local01, local02, local03, local04, local05, local06;
//          true      true
local01 = (3 > 2) && (5 > 3);
console.log(`local01 : ${local01}`); // true

//          true      false
local02 = (3 > 2) && (5 < 3);
console.log(`local02 : ${local02}`); // false

//          true      true
local03 = (3 > 2) || (5 > 3);
console.log(`local03 : ${local03}`); // true

//          true      false
local04 = (3 > 2) || (5 < 3);
console.log(`local04 : ${local04}`); // true

//          false
local05 = !(3 < 2);
console.log(`local05 : ${local05}`); // true

//          true
local06 = !(3 > 2);
console.log(`local06 : ${local06}`); // false