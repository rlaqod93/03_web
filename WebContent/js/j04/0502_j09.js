'use strict';

// var
var num = 11;
{
    var num = 20;
    console.log(`num : ${num}`);
}
console.log(`num : ${num}`);

// let
let num01 = 11;
{
    let num01 = 20;
    console.log(`num01 : ${num01}`);
}
console.log(`num01 : ${num01}`);

// const
const num02 = 11;
{
    const num02 = 20;
    console.log(`num02 : ${num02}`);
}
console.log(`num02 : ${num02}`);