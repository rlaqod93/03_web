'use strict';

let canRead = true;
console.log(`value : ${canRead}, type : ${typeof canRead}`);

let test = 3 < 1;
console.log(`value : ${test}, type: ${typeof test}`);

let pcwkBoolean = 0;
let pcwkBoolean01 = 1;
console.log(`value : ${Boolean(pcwkBoolean)}`);
console.log(`value : ${Boolean(pcwkBoolean01)}`);

let nothing = null;
console.log(`value : ${Boolean(nothing)}`);

let x;
console.log(`value : ${x}`);
console.log(`value : ${Boolean(x)}`);