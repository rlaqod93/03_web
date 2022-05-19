$(document).ready(function(){
    console.log('DH ***** document');
    
    // index가 0부터 시작한다.
    $('tr:even').css('backgroundColor', 'red');
    $('tr:odd').css('backgroundColor', 'orange');

    // td의 첫번째 요소
    $('td:first').css('backgroundColor', 'yellow');

    // td에 마지막 요소
    $('td:last').css('backgroundColor', 'green');

    $('li:eq(0)').css('backgroundColor', 'navy');

    // h1 ~ h6 : header
    $(':header').css('background', 'blue');

    // li:gt(0) 0보다 큰 (0미포함)
    // li:lt(3) 3보다 작은 (3미포함)
    $('li:gt(0)').css('backgroundColor', 'purple');
});