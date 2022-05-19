'use strict';

let sum = 0;
let i = 0;
while(true){
    sum += i;
    console.log(`sum : ${sum}, i : ${i}`);
    i++;
    if(sum > 30){
        break;
    }
};


// 다른 풀이
sum = 0;
for(i = 1; i <= 10; i++){
    sum+=i;
    if(sum >= 30){
        console.log(`sum 30이상 : ${sum}, i : ${i}`);
        break;
    }
}