'use strict';

class User{
    // 생성자
    constructor(name, passwd, age){
        this.name = name;
        this.passwd = passwd;
        this.age = age;
    }
    
    // getter
    get getAge(){
        return this.age;
    }
    // setter
    set setAge(value){
        if(value < 0){
            value = 0;
        }
        this.age = value;
    }
}

const user01 = new User("PCWK", "1234", -1);
console.log(`name : ${user01.name}`);
console.log(`passwd : ${user01.passwd}`);

// setter : value < 0이면 0이되도록 구성
user01.setAge = -1;
// getter
console.log(user01.getAge);