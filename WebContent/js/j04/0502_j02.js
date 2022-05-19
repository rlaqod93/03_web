'use strict';

// return, 매개변수
function process(){
    let kor = 90;
    let eng = 88;
    let math = 90;

    let avg = (kor + eng + math) / 3;
    return avg;
}

const avgResult = process();
console.log(`avgResult : ${avgResult}`);