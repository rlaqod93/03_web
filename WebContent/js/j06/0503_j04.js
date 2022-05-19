'use strict';

// 클래스

class Person{
    // 생성자
    constructor(name, age){
        // 멤버변수
        this.name = name;
        this.age = age;
    }
    // 메소드
    speak(){
        console.log(`name : ${this.name}, age : ${this.age}`);
    }

}

const pcwk = new Person("PCWK", 23);

console.log(`pcwk.name : ${pcwk.name}`);
console.log(`pcwk.age : ${pcwk.age}`);

pcwk.speak();