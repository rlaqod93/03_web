'use strict';

// forEach()
let numArray = [10, 20, 30, 40, 50];
let sum = 0;

numArray.forEach(function(value, index, array){
    console.log(`value : ${value}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
    sum += value;
});
console.log(`sum : ${sum}`);

console.log("===================================================");
// map() : 기존 배열을 이용해 새로운 배열을 생성
let base = [1, 2, 3];

let newArray = base.map(function(value, index, array){
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
    return value * 2;
})

console.log(`newArray.toString() : ${newArray.toString()}`);

console.log("===================================================");
// filter() : 조건에 맞는 배열의 요소들만 걸러 새로운 배열 생성
let data = ["JAVASCRIPT", 20, 30, "JQUERY"];
let newData = data.filter(function(value, index, array){
    console.log(`type: ${typeof value}, value: ${value}, index: ${index}, array: ${array}`);
    return typeof value === "string";
});
console.log(`newData : ${newData.toString()}`);