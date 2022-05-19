'use strict';

let str01 = "pcwk_자바스크립트";

console.log(`str01 : ${str01}`);

// encode
let encodeStr = encodeURIComponent(str01);

console.log(`encodeStr : ${encodeStr}`);

//decode
let decodeStr = decodeURIComponent(encodeStr);

console.log(`decodeStr : ${decodeStr}`);