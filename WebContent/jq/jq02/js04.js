$(document).ready(function(){
    // console.log("DH ***** document")

    console.log($('#site > a:eq(0)').attr('href'));

    // 다음을 모바일버전으로 변경
    $('#site > a:eq(1)').attr('href', 'https://m.daum.net/');

    // callback
    $('#site > a').attr('title', function(i, value){
        console.log(`i : ${i}, value : ${value}`);
        return '웹사이트';
    })
});