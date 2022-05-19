'use strict';

// 1~45까지 사이에 중복되지 않게 6개의 숫자를 출력하세요.

let lottoArr = [];

for(let i = 1; i <= 45; i++){
    lottoArr.push(i);
}

for(let i = 0; i <= 1000; i++){
    let rand = Math.floor((Math.random() * 45));
    let temp = 0;
    temp = lottoArr[0];
    lottoArr[0] = lottoArr[rand];
    lottoArr[rand] = temp;
}
console.log(lottoArr);

for(let i = 0; i < 6; i++){
    console.log(`${i+1}번째 번호 : ${lottoArr.pop()}`);
};

// filter
let lottoBox = lottoArr.filter(function(value, index, array){
    return index < 6;
})
console.log(`Before lottoBox : ${lottoBox.toString()}`);

lottoBox.sort(function(a, b){
    return a - b;
})
console.log(`After lottoBox : ${lottoBox.toString()}`);