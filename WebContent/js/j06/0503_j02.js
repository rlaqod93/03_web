'use strict';

// prototype

// 생성자 함수
function Triangle(b, h){
    this.base = b;
    this.height = h; 
}

// 동적추가된 함수
Triangle.prototype.area = function(){
    return this.base * this.height / 2;
}

let triangle01 = new Triangle(10, 10);
console.log(`triangle01.area() : ${triangle01.area()}`);

// 동적추가된 함수
Triangle.prototype.printOut = function(){
    return "밑변 : " + this.base + ", 높이 : " + this.height + ", 넓이 : "
        + this.area();
}
console.log(`triangle01.printOut(): ${triangle01.printOut()}`);