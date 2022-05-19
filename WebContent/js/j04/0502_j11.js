'use strict';

// 일반적
function add(){
    let n = 0;
    return ++n;
}
console.log(add());
console.log(add());

// 클로져(함수자체를 리턴)
function add2(){
    let n = 0;
    return function(){
        return ++n;
    };
}
let increase = add2();
console.log(increase());
console.log(increase());

// 클로져
function multiply(n){
    return function(){
        return n *= n; // n = n * n;
    }
}

let num01 = multiply(10);
console.log(`num01 : ${num01()}`);
console.log(`num01 : ${num01()}`);

let num02 = multiply(3);
console.log(`num02 : ${num02()}`);
console.log(`num02 : ${num02()}`);