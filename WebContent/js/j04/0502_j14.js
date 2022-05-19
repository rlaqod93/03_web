'use strict';

// Number() : 문자형 숫자를 숫자로 변환
let str01 = "11";
console.log(`str01 : ${str01}, type : ${typeof str01}`);
console.log(`str01 : ${Number(str01)}, type : ${typeof Number(str01)}`);

// parseInt() : 문자를 숫자로 변환
let str02 = "100px";
console.log(`str02 : ${str02}, type : ${typeof str02}`);
console.log(`str02 : ${parseInt(str02)}, type : ${typeof parseInt(str02)}`);

// parseFloat()
let str03 = "33.33%";
console.log(`str03 : ${str03}, type: ${typeof str03}`);
console.log(`str03 : ${parseFloat(str03)}, type : ${typeof parseFloat(str03)}`);