'use strict';

let subject = [11, 13, 'html', 'javascript', 'jquery'];

console.log(`subject[0] : ${subject[0]}`);

// 배열의 길이
console.log(`subject.length : ${subject.length}`);

// 값 설정
subject[3] = "JAVASCRIPT";
console.log(`subject[3] : ${subject[3]}`);

// 배열에 값을 for문을 활용해 모두 출력
for(let i = 0; i < subject.length; i++){
    console.log(`subject[${i}] : ${subject[i]}`);
}

// 배열에 요소 추가(push)
let newLength = subject.push("jsp");
console.log(`newLength : ${newLength}`);

for(let i=0; i<subject.length; i++){
    console.log(`subject[${i}] : ${subject[i]}`);
}

// toString() : 배열을 문자열로 변환
console.log(subject.toString());

// join("-") : 배열의 요소를 "-"로 연결
console.log(subject.join("-"));

// 배열과 배열의 결합
let alpha01 = ["a", "b", "c"];
let alpha02 = ["D", "E", "z"];

console.log(`alpha01.concat(alpha02) : ${alpha01.concat(alpha02)}`);