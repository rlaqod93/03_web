$(document).ready(function(){
    console.log('DH ***** document');
    
    let city = ["청와대", "한강", "부산", "집", "속초"];

    $.each(city, function(index, value){
        console.log(`index : ${index}, value : ${value}`);
    })

    // **중요하다
    let subjectInfo = {
        subject: "html",
        grade: 1,
        days: 20
    }

    $.each(subjectInfo, function(key, value){
        console.log(`key : ${key}, value : ${value}`);
    })

});