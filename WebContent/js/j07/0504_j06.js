'use strict';

// Date 객체

let dateObj = new Date(1994,10,30,5,23,47); // 월은 당월에서 - 1

let dateInfo = {
    year : dateObj.getFullYear(),       //년도 4자리
    month : dateObj.getMonth() + 1,     //월 0~11 + 1
    day : dateObj.getDate(),            //일(1~31)
    week : dateObj.getDay(),            //요일(0은 일요일 ~ 6은 토요일)
    hours : dateObj.getHours(),         //시간
    minute : dateObj.getMinutes(),      //분
    seconds : dateObj.getSeconds(),     //초
    milisec : dateObj.getMilliseconds() // 1000분의 1초
};

for(let i in dateInfo){
    console.log(`${i} : ${dateInfo[i]}`);
}