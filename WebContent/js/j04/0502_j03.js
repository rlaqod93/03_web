'use strict';
// 매개변수
// param : 학생이름, html, css, js
// 각 60점 이상이면 pass
// 60점 이하면 재시험

function isPass(name, htmlScore, cssScore, jsScore){
    let comment = name + " 학생은 ";
    if(htmlScore >= 60 && cssScore >= 60 && jsScore >= 60){
        comment += "전과목 PASS";
    }else{
        if(htmlScore < 60){
            comment += "html 재시험 ";
        }
        if(cssScore < 60){
            comment += "css 재시험 ";
        }
        if(jsScore < 60){
            comment += "js 재시험 ";
        }
    }
    return comment;
}

console.log(isPass("김동호", 80, 90, 95));
console.log(isPass("이상무", 59, 40, 95));

