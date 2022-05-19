$(document).ready(function(){
    console.log('DH ***** document');
    // 태그 선택자
    $('p').css('border', '4px solid red');
    // id 선택자 '#'
    $('#gnb').css('border', '4px solid orange');
    // class 선택자 '.'
    $('.logo').css('border', '4px solid yellow');
    // 자식 선택자 '>'
    $('#gnb > ul > li').css('border', '4px solid green');
    // 하위 선택자 ' '
    $('#gnb ul').css('border', '4px solid blue');
    // 인접 선택자 '+'
    $('#visual + #content').css('border', '4px solid navy');
    // 형제 선택자 '~'
    $('#visual ~ #footer').css('border', '4px solid purple');
    // 종속 선택자
    $('div.util').css('border', '4px solid pink');
    // 그룹 선택자
    $('.left, .right, #banner').css('border', '4px solid gray');
});