$(document).ready(function(){
    console.log('DH ***** document');
    
    $('input:text').css('background', 'red');
    $('input:password').css('background', 'orange');
    $(':button').css('background', 'yellow');
    // 인접 선택자
    $('input:checked + label').css('background', 'green');

    $('option:selected').css('background', 'blue');
    $('textarea:disabled').css('background', 'pink');

    /*
    가시성 필터
    :hidden  ex) div:hidden  div요소 중 hidden인 요소
    :visible ex) div:visible div요소 중 visible인 요소
    */

    // 내용1 : 숨기기
    console.log("div.hidden => " + $('div:hidden').text());
});