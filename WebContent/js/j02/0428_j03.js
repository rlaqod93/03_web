// 문법을 타이트하게 검사
'use strict';

// 상수 : 변경하지 않는 데이터
// const 변수명
let cm = 200;
const DIVISION_VALUE = 100;

// DIVISION_VALUE = 200;
// Uncaught TypeError: Assignment to constant variable.

console.log(cm + " / " + DIVISION_VALUE + " = " + (cm / DIVISION_VALUE));

// ES6에서 추가 된 ``데이터 출력 포맷
const COUNT = 11; // 정수
const SIZE = 17.1; // 실수
console.log(`value: ${COUNT}, type: ${typeof COUNT}`);
console.log(`value: ${SIZE}, type: ${typeof SIZE}`);