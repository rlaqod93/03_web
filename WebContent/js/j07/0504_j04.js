'use strict';

// 1 ~ 100 배열 설정, 이중에 행운의 숫자 1개 출력

let luckyNumber = [];
for(let i = 1; i <= 100; i++){
    luckyNumber.push(i);
};

console.log(`luckyNumber : ${luckyNumber.toString()}`);

let idx = Math.floor(Math.random() * luckyNumber.length);
console.log(`luckyNumber[idx] : ${luckyNumber[idx]}`);