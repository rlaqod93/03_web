$(document).ready(function(){
    console.log('DH ***** document');
    
    // id가 m1 텍스트 추출
    console.log($('#m1').text());

    // 값 변경
    $('#m1').text("java");

    // m2 아래에 있는 div 모두 선택
    $('#m2 > div').text(function(index, text){
        console.log(`index : ${index}, text : ${text}`);

        return `index : ${index}, text : ${text}`;
    });
});