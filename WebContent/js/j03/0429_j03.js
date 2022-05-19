'use strict';

let age = 16;
let admissionFee = "";

if(age < 13){
    admissionFee = "2,000원";
}else if(age >= 13 && age <= 19){
    admissionFee = "4,000원";
}else{
    admissionFee = "6,000원";
}
console.log(`age : ${age}, admissionFee : ${admissionFee}`);