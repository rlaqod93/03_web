'use strict';

function showSubject(){
    for(let i = 0; i < arguments.length; i++){
        console.log(`arguments[${i}] : ${arguments[i]}`);
    }
}
showSubject('html', 'css', 'js', 'jquery', 'jsp', 'spring');

function doMultiple(s1, s2){
    let avg = (s1 + s2) / 2;
    return avg;
}
doMultiple(90, 88);

let doMultiple = (s1, s2) => {
    let avg = (s1 + s2) / 2;
    return avg;
}
doMultiple(90, 88);