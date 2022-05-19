'use strict';

function showMessage(message, from='UNKNOWN'){
    // from에 값이 없으면
    // if(from === undefined){
    //     from = "unknown";
    // }
    console.log(`message : ${message}, from : ${from}`);
}

showMessage("HI", "ASD");