'use strict';
// 즉시 실행 함수
function life(){
    console.log('즉시 실행 함수!!');
}


(
    function(){
        life();
    }
)();

// 호이스팅 가능
// function life(){
//     console.log('즉시 실행 함수!!');
// }

let instant = (function(){
    console.log('즉시 실행 함수2')
})();