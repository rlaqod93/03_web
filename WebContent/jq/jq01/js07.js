$(document).ready(function(){
    console.log('DH ***** document');
    
    let city = ["한강", "부산", "집", "속초", "제주도"];

    //copy해서 새로운 배열 생성
    let newCity = $.map(city, function(value, i){
        if(i < 2){
            return value;
        }
    });
    console.log(`newCity.toString() : ${newCity.toString()}`)
});